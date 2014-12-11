/**
 * Require config for tv-env
 */
var require = {
    shim: {  
        'widgetAPI': {
            deps: ['Define'],
                exports: 'Common.API.Widget',
                init: function () {
                return new this.Common.API.Widget();
            }
        },

        'TVKey': {
            exports: 'Common.API.TVKeyValue',
                init: function () {
                return new window.Common.API.TVKeyValue();
            }
        },

        'webapis': {
            exports: 'webapis'
        },

        'SSO': {
            exports: '$.fn.sfSSO',
                deps: [
                'jquery142',
                'widgetAPI',
                'TVKey',
                'Util',
                'Plugin',
                'sha1'
            ]
        },

        'sha1': {
            exports: 'hex_sha1'
        }
    },

    paths: {
        // ManagerWiget libraries -> www.samsungdforum.com
        jquery142: '$MANAGER_WIDGET/Common/jquery.js',
        widgetAPI: '$MANAGER_WIDGET/Common/API/Widget',
        Define: '$MANAGER_WIDGET/Common/Plugin/Define',
        TVKey: '$MANAGER_WIDGET/Common/API/TVKeyValue',
        webapis: '$MANAGER_WIDGET/Common/webapi/1.0/webapis',
        Util: '$MANAGER_WIDGET/Common/Util/Include',
        Plugin: '$MANAGER_WIDGET/Common/API/Plugin',
        sha1: '$MANAGER_WIDGET/Common/Util/sha1',
        SSO: '$MANAGER_WIDGET/Common/service.sso'
    }
};
