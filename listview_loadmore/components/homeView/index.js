'use strict';

app.homeView = kendo.observable({
    

    
    dataSource : new kendo.data.DataSource({
          type: "odata",
          transport: {
            read: {
              url: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
            }
          },
          serverPaging: true,
        
          pageSize: 20
    }),
    onShow: function() {
        
        
    },
    afterShow: function() {}
});

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.homeView.set('title', 'Home');
})();
// END_CUSTOM_CODE_homeView