﻿
var CoreField = require('../core-field/core-field.js');

require('./core-button.less');

var component = CoreField.extend({

    template: require('./core-button.html'),

    twoway: true, // Needed for toggleable buttons

    data: {

        /**
         * Gets or sets the label for this button.
         * @type String
         * @default ''
         */
        label: '',

        /**
         * Gets or sets whether this a toggleable button.
         * @type Boolean
         * @default false
         */
        toggleable: false,

        /**
         * If true, the button is currently active because the button
         * is toggleable and is currently in the active state.
         * @type boolean
         * @default false
         */
        active: false,

    },

    oninit: function ()
    {
        this._super();
        this.on('tap', this.tap);
    },

    onteardown: function ()
    {
        this.off('tap');
        this._super();
    },

    getField: function ()
    {
        this.field = this.find('button');
    },

    tap: function (event)
    {
        if (!this.get('disabled') && this.get('toggleable'))
        {
            var active = !this.get('active');
            this.set('active', active);
            this.fire('toggle', active);
        }
    },

});

module.exports = component;
