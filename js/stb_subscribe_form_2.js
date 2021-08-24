var STBSUBFORM = {
    init: function () {
        var errorMsgs = document.getElementsByClassName('stb_form_msg_error');
        errorMsgs = [].slice.call(errorMsgs);
        for (var index = 0; index < errorMsgs.length; index++) {
            errorMsgs[index].style.display = 'none';
        }
        var resultDom = document.getElementById('stb_form_result');
        resultDom.style.display = 'none';
        resultDom.className = resultDom.className.replace('success', '');
        resultDom.className = resultDom.className.replace('fail', '');
    },
    formRequest: function (e) {        
        e.preventDefault();
        STBSUBFORM.init();
        if(document.getElementById('stb_recaptcha')){
            document.getElementById('stb_recaptcha').value = grecaptcha.getResponse();
        }
        var value = STBSUBFORM.getValue();
        if (STBSUBFORM.validate(value)) {
            var value = STBSUBFORM.serializeValue(value);
            value = value.replace('&policy=stb_policy_true', '');
            var endpoint = STBSUBFORM.form.action;
            STBSUBFORM.xhrRequest(endpoint, value);
            if(document.getElementById('stb_recaptcha')){
              grecaptcha.reset()
            }
        }
    },
    validateEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    validatePhoneNumber: function (event) {
        if (event.keyCode === 8) {
            return;
        }
        if (event.keyCode === 189) {
            event.preventDefault();
        }
        if (event.target.value.length >= 13) {
            event.preventDefault();
        }
        var n = event.target.value.replace(/[^0-9-]/gi, '');
        event.target.value = n;

        var t = event.target.value.split('');

        var startDigit = event.target.value.startsWith('02') ? 2 : 3;
        var endDigit = event.target.value.startsWith('02') ? 6 : 8;

        if (event.target.value.length === 3) {
            t.splice(startDigit, 0, '-');
            event.target.value = t.join('');
        }

        if (event.target.value.length === 8) {
            t.splice(endDigit, 0, '-');
            event.target.value = t.join('');
        }

        if (event.target.value.length === 12) {
            event.target.value = event.target.value.replace(/-/gi, '');
            var t = event.target.value.split('');
            t.splice(startDigit, 0, '-');
            t.splice(7, 0, '-');
            event.target.value = t.join('');
        }

        if (event.target.value.length === 13) {
            event.target.value = event.target.value.replace(/-/gi, '');
            var t = event.target.value.split('');
            t.splice(startDigit, 0, '-');
            t.splice(8, 0, '-');
            event.target.value = t.join('');
        }
    },
    validate: function (values) {
        for (var index = 0; index < values.length; index++) {
            var item = values[index];
            if (item.id === 'stb_email' && item.value.length === 0) {
                STBSUBFORM.showError(item.id, STBSUBFORM.errorMsg.EMAIL_REQUIRED);
                return false;
            }
            if (item.id === 'stb_email' && !STBSUBFORM.validateEmail(item.value)) {
                STBSUBFORM.showError(item.id, STBSUBFORM.errorMsg.EMAIL_FORMAT);
                return false;
            }            
            if (item.required && item.value.length === 0) {
                var itemLabel = item.parentElement.querySelector('label').innerText;
                STBSUBFORM.showError(item.id, itemLabel + STBSUBFORM.josa(itemLabel) + STBSUBFORM.errorMsg.ITEM_REQUIRED);
                return false;
            }
            if (item.id === 'stb_policy' && !item.checked) {
                STBSUBFORM.showError(item.id, STBSUBFORM.errorMsg.PRIVACY_AGREEMENT);
                return false;
            }
            if (item.id === 'stb_ad_agreement' && !item.checked) {
                STBSUBFORM.showError(item.id, STBSUBFORM.errorMsg.AD_AGREEMENT);
                return false;
            }
            if (item.id === 'stb_$is_sms_agreed' && !item.checked) {
                if (document.getElementById('stb_$phone').value.length !== 0) {
                    STBSUBFORM.showError(item.id, STBSUBFORM.errorMsg.SMS_AGREEMENT);
                    return false;
                }
            }
            if (item.id === 'stb_$phone' && (item.value.length > 13 && item.value.length !== 0)) {
                STBSUBFORM.showError(item.id, STBSUBFORM.errorMsg.PHONE_FORMAT);
                return false;
            }
            if (item.id === 'stb_$phone' && item.value.length === 0 && document.getElementById('stb_$is_sms_agreed').checked) {
                STBSUBFORM.showError(item.id, STBSUBFORM.errorMsg.PHONE_REQUIRED);
                return false;
            }
            if (item.id === 'stb_recaptcha' && grecaptcha.getResponse() == "") {
                STBSUBFORM.showError(item.id, STBSUBFORM.errorMsg.CAPTCHA_REQUIRED);
                return false;
            }            
        }
        return true;
    },
    errorMsg: {
        EMAIL_REQUIRED: '이메일 주소를 입력하세요.',
        EMAIL_FORMAT: '잘못된 이메일 주소입니다.',
        ITEM_REQUIRED: ' 입력하세요.',
        PRIVACY_AGREEMENT: '개인정보 수집 및 이용에 동의해주세요.',
        AD_AGREEMENT: '광고성 정보 수신에 동의해주세요.',
        SMS_AGREEMENT: '문자 메시지 수신에 동의해 주세요.',
        PHONE_FORMAT: '잘못된 전화번호입니다.',
        PHONE_REQUIRED: '전화번호를 입력하세요.',
        CAPTCHA_REQUIRED: '자동입력 방지를 확인해주세요.',
    },
    showError: function (itemId, msg) {
        var domName = itemId + '_error';
        var dom = document.getElementById(domName);
        dom.innerText = msg;
        dom.style.display = 'block';
    },
    xhrRequest: function (endpoint, value) {
        STBSUBFORM.toggleButtonActivation(false);
        if (window.XDomainRequest) {
            var xdr = new XDomainRequest();
            xdr.open("POST", endpoint);
            xdr.onload = function () {
                if (xdr.responseText.indexOf('@ERROR_MSG') !== -1) {
                    STBSUBFORM.showResult(xdr.responseText, 'fail');
                } else {
                    STBSUBFORM.showResult(xdr.responseText, 'success');
                }
            };
            setTimeout(function () {
                xdr.send(value);
            }, 0);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", endpoint, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function () {
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    if (this.response.indexOf('@ERROR_MSG') !== -1) {
                        STBSUBFORM.showResult(this.response, 'fail');
                    } else {
                        STBSUBFORM.showResult(this.response, 'success');
                    }
                }
            }
            xhr.send(value);
        }
    },
    serializeValue: function (nodeList) {
        nodeList = [].slice.call(nodeList);
        var serializeText = '';
        for (var index = 0; index < nodeList.length; index++) {
            var itemKey = nodeList[index].id.replace('stb_', '');
            var itemValue = nodeList[index].value;
            if (itemKey === '$phone') {
                itemValue = itemValue.replace(/-/gi, '');
            }
            if (itemKey === '$is_sms_agreed') {
                itemValue = nodeList[index].checked ? 'Y' : 'N';
            }
            serializeText += itemKey + '=';
            serializeText += encodeURIComponent(itemValue);
            if (index + 1 !== nodeList.length) {
                serializeText += '&';
            }
        }
        return serializeText;
    },
    getValue: function () {
        var inputValues = STBSUBFORM.form.querySelectorAll('input');
        return inputValues;
    },
    showResult: function (response, status) {
        var resMsg;
        var resultDom = document.getElementById('stb_form_result');

        if (status === 'fail') {
            var resMsg = '<p>' + response.split('ERROR_MSG:')[1].split('-->')[0] + '</p>';
        } else {
            var resMsg = response.split('<div class="msg">')[1].split('</div>')[0];
        }

        if (resMsg.indexOf('이미 구독 중인 이메일') !== -1) {
            STBSUBFORM.showError('stb_email', response.split('ERROR_MSG:')[1].split('-->')[0]);
        } else if (resMsg.indexOf('이미 구독 중인 전화번호') !== -1) {
            STBSUBFORM.showError('stb_$phone', response.split('ERROR_MSG:')[1].split('-->')[0]);
        } else {

            document.querySelector(".sec16 #stb_subscribe").style.display="none";
            document.querySelector(".success-sec").classList.add("show");
            document.querySelector(".success-sec-shape").classList.add("show");
            // resultDom.style.display = 'block';
            // resultDom.innerHTML = resMsg;
            // $(".sec16").removeClass("success");
            // contactShape.removeClass("show");
            // if (status === 'success') {
            //     // resultDom.className += ' success';
            // } else if (status === 'fail') {
            //     resultDom.className += ' fail';
            // }
        }
        setTimeout(function() {
            STBSUBFORM.toggleButtonActivation(true);
        }, 2000);
    },
    openModal: function (e) {
        var modal = document.getElementById(e.target.dataset.modal);
        modal.className = modal.className.replace('blind', '');
    },
    closeModal: function (e) {
        var modal = document.getElementById(e.target.dataset.modal);
        modal.className += ' blind';
    },
    openModalOld: function (e) {
        var modal = document.getElementById('stb_form_modal');
        modal.className = modal.className.replace('blind', '');
    },
    closeModalOld: function (e) {
        var modal = document.getElementById('stb_form_modal');
        modal.className += ' blind';
    },
    toggleButtonActivation: function (state) {
        if (STBSUBFORM.submitButton === null) {
            return;
        }
        if (state) {
            STBSUBFORM.submitButton.classList.remove('disabled');
        } else {
            STBSUBFORM.submitButton.classList.add('disabled');
        }
    },
    josa: function (string) {
        return (string.charCodeAt(string.length - 1) - 0xac00) % 28 > 0 ? '을' : '를';
    },
    form: document.getElementById('stb_subscribe_form'),
    modalOpenButton: document.querySelectorAll('.stb_form_modal_open_btn'),
    modalOpenButtonOld: document.querySelectorAll('#stb_form_modal_open'),
    modalCloseButton: document.querySelectorAll('.stb_form_modal_close_btn'),
    modalCloseButtonOld: document.querySelectorAll('#stb_form_modal_close'),
    modalBgButton: document.getElementById('stb_form_modal_bg'),
    phoneNumerInput: document.getElementById('stb_$phone'),
    submitButton: document.getElementById('stb_form_submit_button'),
}

STBSUBFORM.form.addEventListener('submit', STBSUBFORM.formRequest);

if (STBSUBFORM.modalOpenButton !== null) {
    STBSUBFORM.modalOpenButton.forEach(function (element) {
        element.addEventListener('click', STBSUBFORM.openModal);
    });
}
if (STBSUBFORM.modalCloseButton !== null) {
    STBSUBFORM.modalCloseButton.forEach(function (element) {
        element.addEventListener('click', STBSUBFORM.closeModal);
    });
}
if (STBSUBFORM.modalOpenButtonOld !== null) {
    STBSUBFORM.modalOpenButtonOld.forEach(function (element) {
        element.addEventListener('click', STBSUBFORM.openModalOld);
    });
}
if (STBSUBFORM.modalCloseButtonOld !== null) {
    STBSUBFORM.modalCloseButtonOld.forEach(function (element) {
        element.addEventListener('click', STBSUBFORM.closeModalOld);
    });
}
if (STBSUBFORM.modalBgButton !== null) {
    STBSUBFORM.modalBgButton.addEventListener('click', STBSUBFORM.closeModal);
}
if (STBSUBFORM.phoneNumerInput !== null) {
    STBSUBFORM.phoneNumerInput.addEventListener('keyup', STBSUBFORM.validatePhoneNumber);
    STBSUBFORM.phoneNumerInput.addEventListener('keydown', STBSUBFORM.validatePhoneNumber);
}
if (window.location.search.indexOf('groupIds') !== -1) {
    STBSUBFORM.form.action += '?groupIds' + window.location.search.split('groupIds')[1];
}

if (window.location.host.indexOf('page.stibee.com') !== -1) {
    document.querySelector('#stb_subscribe').classList.add('theme-page');
}