/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
'use strict';
$(document).ready(function () {
    $('.ui.form').form({
        fields: {
            email: {
                identifier: 'email',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter a valid e-mail'
                }, {
                    type: 'email',
                    prompt: 'Please enter a valid email'
                }]
            },
            password: {
                identifier: 'password',
                rules: [{
                    type: 'empty',
                    prompt: 'Please enter your password'
                }, {
                    type: 'length[6]',
                    prompt: 'Your password must be at least 6 characters'
                }]
            }
        }
    });
});
