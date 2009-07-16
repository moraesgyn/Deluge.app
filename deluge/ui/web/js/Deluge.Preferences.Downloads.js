(function() {
	DownloadPanel = Ext.extend(Ext.FormPanel, {
		constructor: function(config) {
			config = Ext.apply({
				border: false,
				title: _('Downloads'),
				layout: 'form'
			}, config);
			DownloadPanel.superclass.constructor.call(this, config);
		},
		
		initComponent: function() {
			DownloadPanel.superclass.initComponent.call(this);
			
			this.fieldsets = {}
			this.fields = {};
			
			this.fieldsets['folders'] = this.add({
				xtype: 'fieldset',
				border: false,
				title: _('Folders'),
				labelWidth: 140,
				defaultType: 'textfield',
				autoHeight: true
			});
			
			this.fields['download_location'] = this.fieldsets['folders'].add({
				name: 'download_location',
				fieldLabel: _('Download to'),
				width: 125
			});
			
			this.fields['move_completed'] = this.fieldsets['folders'].add({
				name: 'move_completed',
				fieldLabel: _('Move completed to'),
				width: 125
			});
			
			this.fields['copy_torrent_files'] = this.fieldsets['folders'].add({
				name: 'copy_torrent_files',
				fieldLabel: _('Copy of .torrent files to'),
				width: 125
			});
			
			this.fieldsets['allocation'] = this.add({
				xtype: 'fieldset',
				border: false,
				title: _('Allocation'),
				autoHeight: true,
				labelWidth: 1,
				defaultType: 'radio'
			});
			
			this.fields['compact_allocation'] = this.fieldsets['allocation'].add({
				name: 'compact_allocation',
				labelSeparator: '',
				boxLabel: _('Compact')
			});
		},
		
		onShow: function() {
			DownloadPanel.superclass.onShow.call(this);
		}
	});
	Deluge.Preferences.addPage(new DownloadPanel());
})();

/*Deluge.Preferences.addPage({
	
	items: [, {
		
		items: [{
			
		}, {
			name: 'compact_allocation',
			labelSeparator: '',
			boxLabel: _('Full')
		}]
	}, {
		xtype: 'fieldset',
		border: false,
		title: _('Options'),
		autoHeight: true,
		labelWidth: 1,
		defaultType: 'checkbox',
		items: [{
			name: 'prioritize_first_last',
			labelSeparator: '',
			boxLabel: _('Prioritize first and last pieces of torrent')
		}, {
			name: 'add_paused',
			labelSeparator: '',
			boxLabel: _('Add torrents in Paused state')
		}]
	}]
});*/