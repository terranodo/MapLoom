angular.module('templates-common', ['addlayers/partials/addlayers.tpl.html', 'addlayers/partials/addserver.tpl.html', 'diff/partial/difflist.tpl.html', 'diff/partial/diffpanel.tpl.html', 'diff/partial/featurediff.tpl.html', 'diff/partial/featurepanel.tpl.html', 'diff/partial/panelseparator.tpl.html', 'featuremanager/partial/attributeedit.tpl.html', 'featuremanager/partial/drawselect.tpl.html', 'featuremanager/partial/exclusivemode.tpl.html', 'featuremanager/partial/featureinfobox.tpl.html', 'history/partial/historydiff.tpl.html', 'history/partial/historypanel.tpl.html', 'layers/partials/layerinfo.tpl.html', 'layers/partials/layers.tpl.html', 'legend/partial/legend.tpl.html', 'map/partial/chapterdelete.tpl.html', 'map/partial/mapproperties.tpl.html', 'map/partial/mapsave.tpl.html', 'map/partial/savemap.tpl.html', 'merge/partials/merge.tpl.html', 'modal/partials/dialog.tpl.html', 'modal/partials/modal.tpl.html', 'modal/partials/password.tpl.html', 'notifications/partial/generatenotification.tpl.html', 'notifications/partial/notificationbadge.tpl.html', 'notifications/partial/notifications.tpl.html', 'search/partial/search.tpl.html', 'statistics/partial/statistics.tpl.html', 'storybox/partials/addstorybox.tpl.html', 'storybox/partials/boxinfo.tpl.html', 'storybox/partials/storyboxes.tpl.html', 'sync/partials/addsync.tpl.html', 'sync/partials/remoteselect.tpl.html', 'sync/partials/syncconfig.tpl.html', 'sync/partials/synclinks.tpl.html', 'tableview/partial/filteroptions.tpl.html', 'tableview/partial/tableview.tpl.html', 'timeline/partials/timeline.tpl.html', 'updatenotification/partial/updatenotification.tpl.html', 'utils/partial/loading.tpl.html']);

angular.module("addlayers/partials/addlayers.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("addlayers/partials/addlayers.tpl.html",
    "<div>\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" ng-click=\"$dismiss()\">x</button>\n" +
    "        <h4 class=\"modal-title\">Explore StoryLayers</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body explorer-mini\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <ul class=\"nav nav-tabs\">\n" +
    "                    <li ng-class=\"selected.explore && 'active'\"><a ng-click=\"selected = {explore:true}; remove_query('title__icontains');remove_query('owner__username__in');add_single_query('order_by','title');\" data-toggle=\"tab\">Explore All</a></li>\n" +
    "                    <li ng-class=\"selected.common && 'active'\"><a ng-click=\"selected = {common:true}; add_single_query('order_by','-popular_count');\" data-toggle=\"tab\">Common</a></li>\n" +
    "                    <li ng-class=\"selected.uploads && 'active'\"><a ng-click=\"selected = {uploads:true}; add_single_query('order_by','title');add_single_query('owner__username__in', '{{ request.user.username}}');\" data-toggle=\"tab\">My Uploads</a></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <div class=\"tab-content col-md-12\" style=\"min-height:270px;\">\n" +
    "                <div class=\"tab-pane active\" id=\"Explore\">\n" +
    "                    <div>\n" +
    "                        <div>\n" +
    "                            <nav class=\"filter\">\n" +
    "                                <div class=\"input-group search-bar\" >\n" +
    "                                    <input name=\"text_search_input_exp\" id=\"text_search_input_exp\" placeholder=\"Search for StoryLayers ...\" ng-model=\"layerName\" type=\"text\" class=\"form-control search-input\">\n" +
    "                                    <span class=\"input-group-btn\">\n" +
    "                                        <button class=\"btn btn-primary search-btn\" ng-disabled=\"!layerName\" type=\"submit\" id=\"text_search_btn\"><i class=\"glyphicon glyphicon-search\"></i> Search</button>\n" +
    "                                    </span>\n" +
    "                                </div>\n" +
    "                            </nav>\n" +
    "                            <div class=\"clearfix search-results\">\n" +
    "                                <!-- TODO: Query MapLoom API and display results in a grid -->\n" +
    "                            </div>\n" +
    "                            <div class=\"search-pagination\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <span class=\"pull-left\"></span>\n" +
    "        <button type =\"button\" class=\"btn btn-default\" ng-click=\"$dismiss()\">Close</button>\n" +
    "        <button class=\"btn btn-primary\" ng-disabled=\"selected_results.length == 0\" ng-click=\"$close(selected_results)\">Use Selected</button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("addlayers/partials/addserver.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("addlayers/partials/addserver.tpl.html",
    "<div id=\"server-add-loading\" class=\"loom-loading\" spinner-width=\"6\" spinner-radius=\"40\" spinner-hidden=\"!loading\"></div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"serverform\" class=\"form-horizontal\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <div class=\"col-md-2\">\n" +
    "        <label class=\"control-label\"><span translate=\"server_type\"></span>: </label>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-10\">\n" +
    "      <select ng-model=\"type\" class=\"form-control\">\n" +
    "        <option>WMS</option>\n" +
    "        <option>TMS</option>\n" +
    "      </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': !serverform.servername.$valid}\">\n" +
    "      <div class=\"col-md-2\">\n" +
    "        <label class=\"control-label\"><span translate=\"server_name\"></span>: </label>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-10\">\n" +
    "        <input id=\"server-name\" name=\"servername\" ng-model=\"name\" ng-minlength=\"1\" type=\"text\" class=\"form-control\" placeholder=\"{{'server_name' | translate}}\" required>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': !serverform.serverurl.$valid}\">\n" +
    "      <div class=\"col-md-2\">\n" +
    "        <label class=\"control-label\"><span translate=\"server_url\"></span>: </label>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-10\">\n" +
    "      <input name=\"serverurl\" ng-model=\"url\" type=\"url\" class=\"form-control\" placeholder=\"{{getPlaceholder()}}\" required ng-pattern=\"getPattern()\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" translate=\"close_btn\" ng-click=\"reset()\">Close</button>\n" +
    "  <button ng-hide=\"editing\" type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!serverform.$valid\" ng-click=\"addServer({'type': type, 'name': name, 'url': url})\" translate=\"add_btn\">Add</button>\n" +
    "  <button ng-show=\"editing\" type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!serverform.$valid\" ng-click=\"editServer()\" translate=\"save_btn\">Save</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("diff/partial/difflist.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("diff/partial/difflist.tpl.html",
    "<div class=\"difflist\">\n" +
    "  <ul class=\"list-group\">\n" +
    "    <li class=\"list-group-item conflict\" ng-repeat=\"conflict in conflictList\">\n" +
    "      <span class=\"glyphicon glyphicon-warning-sign\"/><span class=\"ellipsis diff-list-title\">\n" +
    "      '{{conciseName(conflict.feature)}}' {{'in_lower_case' | translate}} {{conflict.layer}}</span>\n" +
    "      <span ng-if=\"!conflict.resolved\" class=\"badge conflict-badge\">{{'conflict' | translate}}</span>\n" +
    "      <span ng-if=\"conflict.resolved\" class=\"badge resolved-badge\">{{'fixed' | translate}}</span>\n" +
    "      <div class=\"diff-list-buttons\">\n" +
    "          <span ng-click=\"zoomToFeature(conflict)\" stop-event=\"click mousedown\" tooltip-append-to-body=\"true\"\n" +
    "                tooltip-placement=\"top\" tooltip=\"{{'go_to_map' | translate}}\" class=\"btn btn-xs btn-default\">\n" +
    "            <i class=\"glyphicon glyphicon-globe\"></i>\n" +
    "          </span>\n" +
    "          <span ng-click=\"clickCallback(conflict,'conflict')\" stop-event=\"click mousedown\" tooltip-append-to-body=\"true\"\n" +
    "                tooltip-placement=\"top\" tooltip=\"{{'show_changes' | translate}}\" class=\"btn btn-xs btn-default\">\n" +
    "            <i class=\"glyphicon glyphicon-tasks\"></i>\n" +
    "          </span>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "    <li class=\"list-group-item merged\" ng-repeat=\"merged in mergeList\">\n" +
    "      <span class=\"glyphicon glyphicon-random\"/><span class=\"ellipsis diff-list-title\">\n" +
    "      '{{conciseName(merged.feature)}}' {{'in_lower_case' | translate}} {{merged.layer}}</span>\n" +
    "      <div class=\"diff-list-buttons\">\n" +
    "          <span ng-click=\"zoomToFeature(merged)\" stop-event=\"click mousedown\" tooltip-append-to-body=\"true\"\n" +
    "                tooltip-placement=\"top\" tooltip=\"{{'go_to_map' | translate}}\" class=\"btn btn-xs btn-default\">\n" +
    "            <i class=\"glyphicon glyphicon-globe\"></i>\n" +
    "          </span>\n" +
    "          <span ng-click=\"clickCallback(merged,'merge')\" stop-event=\"click mousedown\" tooltip-append-to-body=\"true\"\n" +
    "                tooltip-placement=\"top\" tooltip=\"{{'show_changes' | translate}}\" class=\"btn btn-xs btn-default\">\n" +
    "            <i class=\"glyphicon glyphicon-tasks\"></i>\n" +
    "          </span>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "    <li class=\"list-group-item add\" ng-repeat=\"add in addList\">\n" +
    "      <span class=\"glyphicon glyphicon-plus-sign\"/><span class=\"ellipsis diff-list-title\">\n" +
    "      '{{conciseName(add.feature)}}' {{'to_lower_case' | translate}} {{add.layer}}</span>\n" +
    "      <div class=\"diff-list-buttons\">\n" +
    "          <span ng-click=\"zoomToFeature(add)\" stop-event=\"click mousedown\" tooltip-append-to-body=\"true\"\n" +
    "                tooltip-placement=\"top\" tooltip=\"{{'go_to_map' | translate}}\" class=\"btn btn-xs btn-default\">\n" +
    "            <i class=\"glyphicon glyphicon-globe\"></i>\n" +
    "          </span>\n" +
    "          <span ng-click=\"clickCallback(add,'add')\" stop-event=\"click mousedown\" tooltip-append-to-body=\"true\"\n" +
    "                tooltip-placement=\"top\" tooltip=\"{{'show_changes' | translate}}\" class=\"btn btn-xs btn-default\">\n" +
    "            <i class=\"glyphicon glyphicon-tasks\"></i>\n" +
    "          </span>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "    <li class=\"list-group-item modify\" ng-repeat=\"modify in modifyList\">\n" +
    "      <span class=\"glyphicon glyphicon-edit\"/><span class=\"ellipsis diff-list-title\">\n" +
    "      '{{conciseName(modify.feature)}}' {{'in_lower_case' | translate}} {{modify.layer}}</span>\n" +
    "      <div class=\"diff-list-buttons\">\n" +
    "          <span ng-click=\"zoomToFeature(modify)\" stop-event=\"click mousedown\" tooltip-append-to-body=\"true\"\n" +
    "                tooltip-placement=\"top\" tooltip=\"{{'go_to_map' | translate}}\" class=\"btn btn-xs btn-default\">\n" +
    "            <i class=\"glyphicon glyphicon-globe\"></i>\n" +
    "          </span>\n" +
    "          <span ng-click=\"clickCallback(modify,'modify')\" stop-event=\"click mousedown\" tooltip-append-to-body=\"true\"\n" +
    "                tooltip-placement=\"top\" tooltip=\"{{'show_changes' | translate}}\" class=\"btn btn-xs btn-default\">\n" +
    "            <i class=\"glyphicon glyphicon-tasks\"></i>\n" +
    "          </span>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "    <li class=\"list-group-item delete\" ng-repeat=\"delete in deleteList\">\n" +
    "      <span class=\"glyphicon glyphicon-minus-sign\"/><span class=\"ellipsis diff-list-title\">\n" +
    "      '{{conciseName(delete.feature)}}' {{'from_lower_case' | translate}} {{delete.layer}}</span>\n" +
    "      <div class=\"diff-list-buttons\">\n" +
    "          <span ng-click=\"zoomToFeature(delete)\" stop-event=\"click mousedown\" tooltip-append-to-body=\"true\"\n" +
    "                tooltip-placement=\"top\" tooltip=\"{{'go_to_map' | translate}}\" class=\"btn btn-xs btn-default\">\n" +
    "            <i class=\"glyphicon glyphicon-globe\"></i>\n" +
    "          </span>\n" +
    "          <span ng-click=\"clickCallback(delete,'delete')\" stop-event=\"click mousedown\" tooltip-append-to-body=\"true\"\n" +
    "                tooltip-placement=\"top\" tooltip=\"{{'show_changes' | translate}}\" class=\"btn btn-xs btn-default\">\n" +
    "            <i class=\"glyphicon glyphicon-tasks\"></i>\n" +
    "          </span>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>");
}]);

angular.module("diff/partial/diffpanel.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("diff/partial/diffpanel.tpl.html",
    "<div>\n" +
    "  <div ng-if=\"mergeButtons\">\n" +
    "    <div class=\"merge-button-wrap\" tooltip-placement=\"top\" tooltip=\"{{'cancel_merge' | translate}}\">\n" +
    "      <button class=\"merge-button btn btn-default\" type=\"button\" ng-click=\"cancel()\">\n" +
    "        {{'cancel_btn' | translate}}\n" +
    "      </button>\n" +
    "    </div>\n" +
    "    <div class=\"merge-button-wrap\" tooltip-placement=\"top\" tooltip=\"{{conflictsText}}\">\n" +
    "      <button class=\"merge-button btn btn-default\" ng-class=\"{disabled:numConflicts>0}\" type=\"button\" ng-click=\"done()\">\n" +
    "        {{'done_btn' | translate}}\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng-if=\"!mergeButtons\">\n" +
    "    <div class=\"list-group-item diff-summary\">\n" +
    "      <span class=\"glyphicon glyphicon-plus-sign add\" tooltip-placement=\"top\" tooltip=\"{{'adds' | translate}}\"/>\n" +
    "      <span class=\"summary-text\"> {{adds.length}}</span>\n" +
    "      <span class=\"glyphicon glyphicon-edit modify\" tooltip-placement=\"top\" tooltip=\"{{'modifications' | translate}}\"/>\n" +
    "      <span class=\"summary-text\"> {{modifies.length}}</span>\n" +
    "      <span class=\"glyphicon glyphicon-minus-sign delete\" tooltip-placement=\"top\" tooltip=\"{{'deletes' | translate}}\"/>\n" +
    "      <span class=\"summary-text\"> {{deletes.length}}</span>\n" +
    "      <span ng-if=\"merges.length > 0\" class=\"glyphicon glyphicon-random merged\" tooltip-placement=\"top\" tooltip=\"{{'merges' | translate}}\"/>\n" +
    "      <span ng-if=\"merges.length > 0\" class=\"summary-text\"> {{merges.length}}</span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"loom-diff-list diffpanel-diff-list\" add-list=\"adds\" modify-list=\"modifies\" delete-list=\"deletes\" conflict-list=\"conflicts\"\n" +
    "       merge-list=\"merges\" click-callback=\"featureClicked\"/>\n" +
    "</div>");
}]);

angular.module("diff/partial/featurediff.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("diff/partial/featurediff.tpl.html",
    "<div class=\"modal-body\" align=\"center\">\n" +
    "\n" +
    "  <div class=\"panelContainer\">\n" +
    "    <div class=\"panelRow\">\n" +
    "      <div ng-if=\"leftPanel\" class=\"loom-feature-panel\" mapid=\"0\" panel=\"featureDiffService.left\"\n" +
    "           panel-title=\"leftTitle\"></div>\n" +
    "      <div ng-if=\"leftSeparator\" class=\"loom-panel-separator\" icon=\"glyphicon-chevron-right\"\n" +
    "           hover=\"editable\" clickfunction=\"leftSeparatorClick\"\n" +
    "           panel=\"featureDiffService.left\"></div>\n" +
    "      <div ng-if=\"mergePanel\" class=\"loom-feature-panel merge-panel\" mapid=\"1\" panel=\"featureDiffService.merged\"\n" +
    "           panel-title=\"mergedTitle\"></div>\n" +
    "      <div ng-if=\"rightSeparator\" class=\"loom-panel-separator\" icon=\"glyphicon-chevron-left\"\n" +
    "           hover=\"editable\" clickfunction=\"rightSeparatorClick\"\n" +
    "           panel=\"featureDiffService.right\"></div>\n" +
    "      <div ng-if=\"rightPanel\" class=\"loom-feature-panel\" mapid=\"2\" panel=\"featureDiffService.right\"\n" +
    "           panel-title=\"rightTitle\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button type=\"button\" class=\"btn btn-default pull-right\" ng-click=\"cancel()\">{{'cancel_btn' | translate}}</button>\n" +
    "  <button ng-if=\"editable\" type=\"button\" class=\"btn btn-primary pull-right\" ng-click=\"save()\">{{'save_btn' | translate}}</button>\n" +
    "  <div class=\"btn-group-wrap pull-left\">\n" +
    "    <div class=\"btn-group feature-diff-btn-group\">\n" +
    "      <button ng-if=\"featureDiffService.undoable && !readOnly\" ng-disabled=\"!undoEnabled\" type=\"button\"\n" +
    "              class=\"btn btn-default pull-left\" ng-click=\"undoChanges()\"\n" +
    "              tooltip-placement=\"top\" tooltip=\"{{'undo_changes' | translate}}\" tooltip-append-to-body=\"true\">\n" +
    "        <i class=\"glyphicon glyphicon-share-alt undo-button\"></i>\n" +
    "      </button>\n" +
    "      <button type=\"button\" class=\"btn btn-default pull-left authors-button\" ng-disabled=\"isLoading\"\n" +
    "              ng-class=\"{'authors-shown':authorsShown}\" ng-click=\"onClick()\" ng-controller=\"authors-tooltip-controller\"\n" +
    "              tooltip-placement=\"top\" tooltip=\"{{'show_authors' | translate}}\" tooltip-append-to-body=\"true\">\n" +
    "        <div class=\"loom-loading\" spinner-radius=\"16\" spinner-hidden=\"!isLoading\"></div>\n" +
    "        <i ng-if=\"!isLoading\" class=\"glyphicon glyphicon-user\"></i>\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("diff/partial/featurepanel.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("diff/partial/featurepanel.tpl.html",
    "<div class=\"feature-panel\" ng-class=\"{'authors-visible':authorsShown}\">\n" +
    "  {{title}}\n" +
    "  <div id=\"loading-{{mapid}}\" class=\"map-loading\">\n" +
    "    <div class=\"loading\">\n" +
    "      <!-- We make this div spin -->\n" +
    "      <div class=\"spinner\">\n" +
    "        <!-- Mask of the quarter of circle -->\n" +
    "        <div class=\"mask\">\n" +
    "          <!-- Inner masked circle -->\n" +
    "          <div class=\"maskedCircle\"></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div id=\"preview-map-{{mapid}}\" class=\"preview-map map\"></div>\n" +
    "  <div ng-if=\"authorsShown\">\n" +
    "    <input ng-if=\"!isConflictPanel\" value=\"{{computeAuthorString(panel.geometry)}}\" type=\"text\" readOnly=\"readOnly\"\n" +
    "           class=\"geom-author form-control attr-none loom-history-popover\" placeholder=\"\" commit=\"panel.geometry.commit\">\n" +
    "    <input ng-if=\"isConflictPanel\" value=\"--------------------------------------\" type=\"text\" readOnly=\"readOnly\"\n" +
    "           class=\"geom-author form-control attr-none\" placeholder=\"\">\n" +
    "  </div>\n" +
    "  <span ng-repeat=\"attribute in panel.attributes\" class=\"\">\n" +
    "    <span class=\"info-box-attribute ellipsis\">{{attribute.attributename}}</span>\n" +
    "            <div ng-switch on=\"attribute.type\" class=\"attribute-value-section\">\n" +
    "              <div ng-switch-when=\"xsd:dateTime\" ng-class=\"{\n" +
    "                        'attr-added': attribute.changetype == 'ADDED',\n" +
    "                        'attr-modified': attribute.changetype == 'MODIFIED',\n" +
    "                        'attr-removed' : attribute.changetype == 'REMOVED' || panel.geometry.changetype == 'REMOVED'\n" +
    "                      }\">\n" +
    "                <datetimepicker ng-disabled=\"!isConflictPanel\" class=\"merge-datetime attr-none\" editable=\"{{attribute.editable}}\"\n" +
    "                                seperate-time=\"false\" date-object=\"attribute.newvalue\"></datetimepicker>\n" +
    "              </div>\n" +
    "              <!--\n" +
    "              There are a lot of problems with the handling of date and time fields, commenting out until we have the time\n" +
    "              to refactor it.\n" +
    "              <div ng-switch-when=\"xsd:date\" ng-class=\"{\n" +
    "                        'attr-added': attribute.changetype == 'ADDED',\n" +
    "                        'attr-modified': attribute.changetype == 'MODIFIED',\n" +
    "                        'attr-removed' : attribute.changetype == 'REMOVED' || panel.geometry.changetype == 'REMOVED'\n" +
    "                      }\">\n" +
    "                <datetimepicker ng-disabled=\"!isConflictPanel\" class=\"merge-datetime attr-none\"\n" +
    "                                editable=\"{{attribute.editable}}\"\n" +
    "                                seperate-time=\"false\" date-object=\"attribute\" time=\"false\"></datetimepicker>\n" +
    "              </div>\n" +
    "              <div ng-switch-when=\"xsd:time\" ng-class=\"{\n" +
    "                        'attr-added': attribute.changetype == 'ADDED',\n" +
    "                        'attr-modified': attribute.changetype == 'MODIFIED',\n" +
    "                        'attr-removed' : attribute.changetype == 'REMOVED' || panel.geometry.changetype == 'REMOVED'\n" +
    "                      }\">\n" +
    "                <datetimepicker ng-disabled=\"!isConflictPanel\" class=\"merge-datetime attr-none\"\n" +
    "                                editable=\"{{attribute.editable}}\"\n" +
    "                                seperate-time=\"false\" date-object=\"attribute\" date=\"false\"></datetimepicker>\n" +
    "              </div>\n" +
    "              -->\n" +
    "              <div ng-switch-when=\"simpleType\" class=\"merge-select\" ng-class=\"{'input-group': attribute.editable, 'has-error': !attribute.valid}\">\n" +
    "                <div ng-if=\"attribute.editable\" class=\"input-group-btn\">\n" +
    "                  <button ng-disabled=\"!isConflictPanel\" type=\"button\" class=\"btn btn-default dropdown-toggle attr-none\"\n" +
    "                          data-toggle=\"dropdown\">\n" +
    "                    <span class=\"caret\"></span>\n" +
    "                  </button>\n" +
    "                  <ul class=\"dropdown-menu\">\n" +
    "                    <li>\n" +
    "                      <a ng-click=\"selectValue(attribute, null)\">&nbsp;</a>\n" +
    "                    </li>\n" +
    "                    <li ng-repeat=\"enum in attribute.enum\">\n" +
    "                      <a ng-click=\"selectValue(attribute, $index)\">{{enum._value}}</a>\n" +
    "                    </li>\n" +
    "                  </ul>\n" +
    "                </div>\n" +
    "                <input ng-model=\"attribute.newvalue\" type=\"text\" class=\"form-control attr-none\" disabled ng-class=\"{\n" +
    "                      'attr-added': attribute.changetype == 'ADDED',\n" +
    "                      'attr-modified': attribute.changetype == 'MODIFIED',\n" +
    "                      'attr-removed' : attribute.changetype == 'REMOVED' || panel.geometry.changetype == 'REMOVED',\n" +
    "                      'form-control' : attribute.editable\n" +
    "                    }\"/>\n" +
    "              </div>\n" +
    "              <div ng-switch-when=\"xsd:boolean\" class=\"merge-select\" ng-class=\"{'input-group': attribute.editable, 'has-error': !attribute.valid}\">\n" +
    "                <div ng-if=\"attribute.editable\" class=\"input-group-btn\">\n" +
    "                  <button ng-disabled=\"!isConflictPanel\" type=\"button\" class=\"btn btn-default dropdown-toggle attr-none\"\n" +
    "                          data-toggle=\"dropdown\">\n" +
    "                    <span class=\"caret\"></span>\n" +
    "                  </button>\n" +
    "                  <ul class=\"dropdown-menu\">\n" +
    "                    <li>\n" +
    "                      <a ng-click=\"selectValue(attribute, null)\">&nbsp;</a>\n" +
    "                    </li>\n" +
    "                    <li ng-repeat=\"enum in attribute.enum\">\n" +
    "                      <a ng-click=\"selectBooleanValue(attribute, $index)\" translate=\"{{enum._value}}\"></a>\n" +
    "                    </li>\n" +
    "                  </ul>\n" +
    "                </div>\n" +
    "                <input value=\"{{translate(attribute.newvalue)}}\" type=\"text\" class=\"form-control attr-none\" disabled ng-class=\"{\n" +
    "                      'attr-added': attribute.changetype == 'ADDED',\n" +
    "                      'attr-modified': attribute.changetype == 'MODIFIED',\n" +
    "                      'attr-removed' : attribute.changetype == 'REMOVED' || panel.geometry.changetype == 'REMOVED',\n" +
    "                      'form-control' : attribute.editable\n" +
    "                    }\"/>\n" +
    "              </div>\n" +
    "              <div ng-switch-when=\"xsd:int\" ng-class=\"{'has-error': !attribute.valid}\">\n" +
    "                <input ng-disabled=\"!isConflictPanel\" ng-model=\"attribute.newvalue\" type=\"text\"\n" +
    "                       class=\"form-control attr-none\"\n" +
    "                       ng-change=\"validateField(attribute, 'newvalue')\" ng-class=\"{\n" +
    "                      'attr-added': attribute.changetype == 'ADDED',\n" +
    "                      'attr-modified': attribute.changetype == 'MODIFIED',\n" +
    "                      'attr-removed' : attribute.changetype == 'REMOVED' || panel.geometry.changetype == 'REMOVED'\n" +
    "                    }\"/>\n" +
    "              </div>\n" +
    "              <div ng-switch-when=\"xsd:double\" ng-class=\"{'has-error': !attribute.valid}\">\n" +
    "                <input ng-disabled=\"!isConflictPanel\" ng-model=\"attribute.newvalue\" type=\"text\"\n" +
    "                       class=\"form-control attr-none\"\n" +
    "                       ng-change=\"validateField(attribute, 'newvalue')\" ng-class=\"{\n" +
    "                      'attr-added': attribute.changetype == 'ADDED',\n" +
    "                      'attr-modified': attribute.changetype == 'MODIFIED',\n" +
    "                      'attr-removed' : attribute.changetype == 'REMOVED' || panel.geometry.changetype == 'REMOVED'\n" +
    "                    }\"/>\n" +
    "              </div>\n" +
    "              <div ng-switch-default ng-class=\"{'has-error': !attribute.valid}\">\n" +
    "                <input ng-model=\"attribute.newvalue\" type=\"text\" class=\"form-control attr-none\"\n" +
    "                       ng-disabled=\"!isConflictPanel\" ng-change=\"validateField(attribute, 'newvalue')\" placeholder=\"\"\n" +
    "                       ng-class=\"{\n" +
    "                        'attr-added': attribute.changetype == 'ADDED',\n" +
    "                        'attr-modified': attribute.changetype == 'MODIFIED',\n" +
    "                        'attr-removed' : attribute.changetype == 'REMOVED' || panel.geometry.changetype == 'REMOVED'\n" +
    "                      }\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div ng-if=\"authorsShown\">\n" +
    "              <input ng-if=\"!isConflictPanel\" value=\"{{computeAuthorString(attribute)}}\" type=\"text\" readOnly=\"readOnly\"\n" +
    "                       class=\"info-box-author form-control attr-none loom-history-popover\" placeholder=\"\" commit=\"attribute.commit\">\n" +
    "              <input ng-if=\"isConflictPanel\" value=\"--------------------------------------\" type=\"text\" readOnly=\"readOnly\"\n" +
    "                     class=\"info-box-author form-control attr-none\" placeholder=\"\">\n" +
    "            </div>\n" +
    "  </span>\n" +
    "</div>");
}]);

angular.module("diff/partial/panelseparator.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("diff/partial/panelseparator.tpl.html",
    "<div>\n" +
    "  &nbsp;\n" +
    "  <div class=\"map-arrow attribute-arrow\" ng-class=\"{'authors-shown':authorsShown}\">\n" +
    "    <span class=\"map-arrow-inner attribute-arrow-inner glyphicon {{icon}}\" ng-click=\"geometryArrowClick()\"\n" +
    "          ng-class=\"{'arrow-inactive':!geometryChanged}\"></span>\n" +
    "  </div>\n" +
    "  <div id=\"preview-map-{{mapid}}\" class=\"preview-map map\"></div>\n" +
    "  <span ng-repeat=\"attribute in arrows\" class=\"\">\n" +
    "    <div class=\"attribute-arrow\" ng-class=\"{'authors-shown':authorsShown}\">\n" +
    "      <span class=\"attribute-arrow-inner glyphicon {{icon}}\" ng-class=\"{'arrow-inactive':!attribute.active}\"\n" +
    "            ng-click=\"arrowClick($index)\"></span>\n" +
    "    </div>\n" +
    "  </span>\n" +
    "</div>");
}]);

angular.module("featuremanager/partial/attributeedit.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("featuremanager/partial/attributeedit.tpl.html",
    "<div class=\"bottom-fade\"></div>\n" +
    "<div id=\"editFeatureBody\" class=\"modal-body\">\n" +
    "  <form name=\"editfeatureform\" class=\"form wrapper\">\n" +
    "    <div class=\"form-group\" ng-if=\"coordinates\">\n" +
    "      <label for=\"latLonEdit\" class=\"control-label custom-control-label\">{{'location_lon_lat' | translate}}</label>\n" +
    "      <latloneditor id=\"latLonEdit\" coord-display=\"coordDisplay\" geom=\"coordinates\"></latloneditor>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-repeat=\"prop in properties\">\n" +
    "      <div ng-if=\"prop[0] === 'fotos' || prop[0] === 'photos'\">\n" +
    "        <label class=\"control-label custom-control-label\">{{prop[0]}}</label>\n" +
    "        <div class=\"photo-group\" ng-repeat=\"photo in prop[1]\">\n" +
    "          <i ng-click=\"removePhoto(prop, photo)\" class=\"close glyphicon glyphicon-remove\"></i>\n" +
    "          <img width=\"100%\" ng-src=\"{{photo.modified}}\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div ng-if=\"prop[0] !== 'fotos' && prop[0] !== 'photos'\">\n" +
    "        <label class=\"control-label custom-control-label\">{{prop[0]}}</label>\n" +
    "        <div ng-switch on=\"prop.type\">\n" +
    "          <datetimepicker ng-switch-when=\"xsd:dateTime\" date-object=\"prop[1]\" default-date=\"inserting\"></datetimepicker>\n" +
    "          <datetimepicker ng-switch-when=\"xsd:date\" date-object=\"prop[1]\" default-date=\"inserting\" time=\"false\"></datetimepicker>\n" +
    "          <datetimepicker ng-switch-when=\"xsd:time\" date-object=\"prop[1]\" default-date=\"inserting\" date=\"false\"></datetimepicker>\n" +
    "          <div ng-switch-when=\"simpleType\" class=\"input-group\"  ng-class=\"{'has-error': !prop.valid}\">\n" +
    "            <div class=\"input-group-btn\" ng-class=\"{'dropup': $last}\">\n" +
    "              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "                <span class=\"caret\"></span>\n" +
    "              </button>\n" +
    "              <ul class=\"dropdown-menu\">\n" +
    "                <li>\n" +
    "                  <a ng-click=\"selectValue(prop, null)\">&nbsp;</a>\n" +
    "                </li>\n" +
    "                <li ng-repeat=\"enum in prop.enum\">\n" +
    "                  <a ng-click=\"selectValue(prop, $index)\">{{enum._value}}</a>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "          </div>\n" +
    "            <input ng-model=\"prop[1]\" type=\"text\" class=\"form-control\" ng-change=\"validateField(prop, 1)\" disabled/>\n" +
    "          </div>\n" +
    "          <div ng-switch-when=\"xsd:int\" ng-class=\"{'has-error': !prop.valid}\">\n" +
    "            <input ng-model=\"prop[1]\" type=\"text\" class=\"form-control\" ng-change=\"validateField(prop, 1)\"/>\n" +
    "          </div>\n" +
    "          <div ng-switch-when=\"xsd:integer\" ng-class=\"{'has-error': !prop.valid}\">\n" +
    "            <input ng-model=\"prop[1]\" type=\"text\" class=\"form-control\" ng-change=\"validateField(prop, 1)\"/>\n" +
    "          </div>\n" +
    "          <div ng-switch-when=\"xsd:double\" ng-class=\"{'has-error': !prop.valid}\">\n" +
    "            <input ng-model=\"prop[1]\" type=\"text\" class=\"form-control\" ng-change=\"validateField(prop, 1)\"/>\n" +
    "          </div>\n" +
    "          <div ng-switch-when=\"xsd:decimal\" ng-class=\"{'has-error': !prop.valid}\">\n" +
    "            <input ng-model=\"prop[1]\" type=\"text\" class=\"form-control\" ng-change=\"validateField(prop, 1)\"/>\n" +
    "          </div>\n" +
    "          <div ng-switch-when=\"xsd:boolean\" class=\"input-group\"  ng-class=\"{'has-error': !prop.valid}\">\n" +
    "            <div class=\"input-group-btn\" ng-class=\"{'dropup': $last}\">\n" +
    "              <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "                <span class=\"caret\"></span>\n" +
    "              </button>\n" +
    "              <ul class=\"dropdown-menu\">\n" +
    "                <li>\n" +
    "                  <a ng-click=\"selectValue(prop, null)\">&nbsp;</a>\n" +
    "                </li>\n" +
    "                <li ng-repeat=\"enum in prop.enum\">\n" +
    "                  <a ng-click=\"selectValue(prop, $index)\" translate=\"{{enum._value}}\"></a>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "            <input value=\"{{translate(prop[1])}}\" type=\"text\" class=\"form-control\" disabled/>\n" +
    "          </div>\n" +
    "          <div ng-switch-default  ng-class=\"{'has-error': !prop.valid}\">\n" +
    "            <autotextarea ng-model=\"prop[1]\" class=\"form-control custom-form-control auto-text-area\" ng-change=\"validateField(prop, 1)\"></autotextarea>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button type=\"button\" class=\"btn btn-primary\" ng-click=\"save()\">\n" +
    "    <div class=\"loom-loading\" spinner-radius=\"16\" spinner-hidden=\"!isSaving\"></div>\n" +
    "    <span ng-class=\"{'text-transparent': isSaving}\">{{'save_btn' | translate}}</span>\n" +
    "  </button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("featuremanager/partial/drawselect.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("featuremanager/partial/drawselect.tpl.html",
    "<div class=\"modal-body\">\n" +
    "  <div class=\"row\"><p>Please select the geometry type you wish to draw.</p></div>\n" +
    "  <br>\n" +
    "  <select class=\"form-control\" ng-model=\"drawType\" required ng-options=\"type for type in geometryTypes\">\n" +
    "  </select>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button type=\"button\" class=\"btn btn-primary\" ng-click=\"mapService.addDraw(drawType)\" data-dismiss=\"modal\" ng-disabled=\"!drawType\" translate=\"continue_btn\">Continue</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("featuremanager/partial/exclusivemode.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("featuremanager/partial/exclusivemode.tpl.html",
    "<div id=\"exclusive-mode-container\" class=\"panel-group collapse flat-top\">\n" +
    "  <div id=\"exclusive-mode-panel\" class=\"panel in\">\n" +
    "    <div align=\"center\"><h5>{{exclusiveModeService.getTitle()}}</h5></div>\n" +
    "    <div class=\"btn-group-wrap\">\n" +
    "\n" +
    "    <button ng-click=\"exclusiveModeService.getButtonTwo().callback()\" class=\"btn btn-sm btn-danger\" tooltip-append-to-body=\"true\"\n" +
    "            tooltip-placement=\"bottom\" tooltip=\"{{exclusiveModeService.getButtonTwo().title}}\"><i class=\"glyphicon glyphicon-remove\"></i></button>\n" +
    "    <div ng-show=\"exclusiveModeService.isMultiType()\" class=\"btn-group\">\n" +
    "      <button class=\"btn btn-sm btn-default\" tooltip-append-to-body=\"true\" ng-click=\"exclusiveModeService.addToFeature()\"\n" +
    "              tooltip-placement=\"bottom\" tooltip=\"{{'add_to_feature' | translate}}\"><i class=\"glyphicon glyphicon-plus\"></i></button>\n" +
    "      <button class=\"btn btn-sm btn-default\" tooltip-append-to-body=\"true\" ng-click=\"exclusiveModeService.orthogonalize()\" ng-show=\"exclusiveModeService.isPolygon()\"\n" +
    "              tooltip-placement=\"bottom\" tooltip=\"{{'right_angles' | translate}}\"><i class=\"glyphicon glyphicon-fullscreen\"></i></button>\n" +
    "      <button class=\"btn btn-sm btn-default\" tooltip-append-to-body=\"true\" ng-click=\"exclusiveModeService.removeFromFeature()\"\n" +
    "              tooltip-placement=\"bottom\" tooltip=\"{{'remove_from_feature' | translate}}\"><i class=\"glyphicon glyphicon-minus\"></i></button>\n" +
    "    </div>\n" +
    "    <button class=\"btn btn-sm btn-default\" tooltip-append-to-body=\"true\" ng-show=\"!exclusiveModeService.isMultiType() && exclusiveModeService.isPolygon()\"\n" +
    "            tooltip-placement=\"bottom\" tooltip=\"{{'right_angles' | translate}}\" ng-click=\"exclusiveModeService.orthogonalize()\"><i class=\"glyphicon glyphicon-fullscreen\"></i></button>\n" +
    "    <button ng-click=\"exclusiveModeService.getButtonOne().callback()\" class=\"btn btn-sm btn-primary\" tooltip-append-to-body=\"true\"\n" +
    "            tooltip-placement=\"bottom\" tooltip=\"{{exclusiveModeService.getButtonOne().title}}\">\n" +
    "      <div class=\"loom-loading\" spinner-radius=\"16\" spinner-hidden=\"!exclusiveModeService.isSaving\"></div>\n" +
    "      <i class=\"glyphicon glyphicon-ok\" ng-class=\"{'text-transparent': exclusiveModeService.isSaving}\"></i>\n" +
    "    </button>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("featuremanager/partial/featureinfobox.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("featuremanager/partial/featureinfobox.tpl.html",
    "<div>\n" +
    "  <div class=\"info-box-title-row row\">\n" +
    "    <div class=\"info-box-back\"><i ng-if=\"featureManagerService.getPreviousState() != ''\" class=\"glyphicon glyphicon-chevron-left\" ng-click=\"featureManagerService.showPreviousState()\"></i></div>\n" +
    "    <div ng-if=\"featureManagerService.getState() == 'layers'\" class=\"info-box-title ellipsis\" translate=\"map_layers\"></div>\n" +
    "    <div ng-if=\"featureManagerService.getState() == 'layer'\" class=\"info-box-title ellipsis\">{{featureManagerService.getSelectedItem().layer.get('metadata').title}}</div>\n" +
    "    <div ng-if=\"featureManagerService.getState() == 'feature'\" class=\"info-box-title ellipsis\">\n" +
    "      {{featureManagerService.getSelectedItemLayer().layer.get('metadata').title}}<br>{{featureManagerService.getSelectedItem().id}}</div>\n" +
    "    <div class=\"info-box-close\"><i class=\"glyphicon glyphicon-remove\" ng-click=\"featureManagerService.hide()\"></i></div>\n" +
    "  </div>\n" +
    "  <div class=\"animate-switch-container\">\n" +
    "    <div ng-if=\"featureManagerService.getState() == 'layers'\">\n" +
    "      <ul class=\"list-group list-group-info-box\">\n" +
    "        <li ng-repeat=\"layerInfo in featureManagerService.getSelectedItem()\" class=\"list-group-item-info-box\"\n" +
    "            ng-click=\"featureManagerService.show(layerInfo)\">\n" +
    "          <div>{{layerInfo.layer.get('metadata').title}}</div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <div ng-if=\"featureManagerService.getState() == 'layer'\">\n" +
    "      <ul class=\"list-group list-group-info-box\">\n" +
    "        <li ng-repeat=\"feature in featureManagerService.getSelectedItem().features\" class=\"list-group-item-info-box\"\n" +
    "            ng-click=\"featureManagerService.show(feature)\">\n" +
    "          <div>{{feature.id}}</div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-if=\"featureManagerService.getState() == 'feature'\">\n" +
    "    <div id=\"pic-carousel-container\" ng-if=\"featureManagerService.getSelectedItemPics() && isAttributeVisible(featureManagerService.getSelectedItemPics().name)\">\n" +
    "      <carousel id=\"feature-info-box-carousel\" interval=\"2000\">\n" +
    "        <slide ng-repeat=\"pic in featureManagerService.getSelectedItemPics() track by $index\">\n" +
    "          <img ng-src=\"{{pic}}\" style=\"margin: auto\" ng-click=\"featureManagerService.showPics($index)\">\n" +
    "        </slide>\n" +
    "      </carousel>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"feature-info-box\">\n" +
    "      <span class=\"info-box-attribute\" ng-show=\"!isShowingAttributes()\" translate=\"no_attributes\"></span>\n" +
    "      <span ng-repeat=\"prop in featureManagerService.getSelectedItemProperties()\">\n" +
    "        <div ng-if=\"prop[0] !== 'fotos' && prop[0] !== 'photos'\" ng-show=\"isAttributeVisible(prop[0])\">\n" +
    "          <span class=\"info-box-attribute\">{{prop[0]}}</span>\n" +
    "            <span ng-switch on=\"isUrl(prop[1])\">\n" +
    "              <a ng-switch-when=\"true\" class=\"info-box-attribute-value\" target=\"_blank\" href=\"{{prop[1]}}\">{{prop[1]}}</a>\n" +
    "              <span ng-switch-default class=\"info-box-attribute-value\">{{prop[1]}}</span>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "      </span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"feature-info-box-bottom\">\n" +
    "      <div id=\"feature-info-box-button-group\" class=\"btn-group pull-right\">\n" +
    "        <button type=\"button\" ng-click=\"showTable(featureManagerService.getSelectedLayer())\" tooltip-append-to-body=\"true\" tooltip-placement=\"top\"\n" +
    "                tooltip=\"{{'show_table' | translate}}\" class=\"btn btn-sm btn-default glyphicon glyphicon-list\">\n" +
    "            <div class=\"loom-loading\" spinner-radius=\"16\" spinner-hidden=\"!isLoadingTable(featureManagerService.getSelectedLayer())\"></div>\n" +
    "        </button>\n" +
    "        <button type=\"button\" ng-if=\"featureManagerService.getSelectedLayer().get('metadata').isGeoGig\"\n" +
    "                ng-click=\"showFeatureHistory()\" tooltip-append-to-body=\"true\" tooltip-placement=\"top\"\n" +
    "                tooltip=\"{{'show_history' | translate}}\"\n" +
    "                class=\"btn btn-sm btn-default glyphicon glyphicon-time\">\n" +
    "          <div class=\"loom-loading\" spinner-radius=\"10\" spinner-width=\"2\" spinner-hidden=\"!loadingHistory\"></div>\n" +
    "                </button>\n" +
    "        <!--<button type=\"button\" tooltip-append-to-body=\"true\" tooltip-placement=\"top\" tooltip=\"{{'show_pics' | translate}}\"\n" +
    "                class=\"btn btn-sm btn-default glyphicon glyphicon-camera\"></button>-->\n" +
    "        <button type=\"button\" ng-if=\"featureManagerService.getSelectedLayer().get('metadata').editable &&\n" +
    "        !featureManagerService.getSelectedLayer().get('metadata').readOnly\" ng-click=\"featureManagerService.startAttributeEditing()\"\n" +
    "                tooltip-append-to-body=\"true\" tooltip-placement=\"top\" tooltip=\"{{'edit_attributes' | translate}}\"\n" +
    "                class=\"btn btn-sm btn-default glyphicon glyphicon-list-alt\"></button>\n" +
    "        <button type=\"button\" ng-if=\"featureManagerService.getSelectedLayer().get('metadata').editable &&\n" +
    "        !featureManagerService.getSelectedLayer().get('metadata').readOnly\" ng-click=\"featureManagerService.startGeometryEditing()\"\n" +
    "                tooltip-append-to-body=\"true\" tooltip-placement=\"top\" tooltip=\"{{'edit_geometry' | translate}}\"\n" +
    "                class=\"btn btn-sm btn-default glyphicon glyphicon-edit\"></button>\n" +
    "        <button type=\"button\" ng-if=\"!featureManagerService.getSelectedLayer().get('metadata').readOnly\"\n" +
    "                ng-click=\"deleteFeature()\" tooltip-append-to-body=\"true\" tooltip-placement=\"top\" tooltip=\"{{'delete_feature' | translate}}\"\n" +
    "                class=\"btn btn-sm btn-default glyphicon glyphicon-trash\">\n" +
    "          <div class=\"loom-loading\" spinner-radius=\"10\" spinner-width=\"2\" spinner-hidden=\"!deletingFeature\"></div>\n" +
    "                </button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("history/partial/historydiff.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("history/partial/historydiff.tpl.html",
    "<div class=\"modal-body\">\n" +
    "  <div class=\"history-loading loom-loading\" spinner-width=\"4\" spinner-radius=\"48\" spinner-hidden=\"!isLoading\"></div>\n" +
    "  <form ng-if=\"!contentHidden\" class=\"form\">\n" +
    "    <div ng-if=\"active\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"control-label\">{{'start_date' | translate}}</label>\n" +
    "        <datetimepicker date-object=\"startDate[0]\"></datetimepicker>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label class=\"control-label\">{{'end_date' | translate}}</label>\n" +
    "        <datetimepicker date-object=\"endDate[0]\"></datetimepicker>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"cancel()\">{{'cancel_btn' | translate}}</button>\n" +
    "    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"onDiff()\">{{'summarize_btn' | translate}}</button>\n" +
    "    <button type=\"button\" class=\"btn btn-danger pull-left\" ng-click=\"exportCSV()\"><i class=\"glyphicon glyphicon-download-alt\"></i> {{'export_csv' | translate}}</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("history/partial/historypanel.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("history/partial/historypanel.tpl.html",
    "<div>\n" +
    "  <div class=\"history-scroll-pane\">\n" +
    "    <ul class=\"list-group\">\n" +
    "      <li class=\"list-group-item loom-history-popover\" ng-repeat=\"commit in log | filter:{visible:'true'}\" ng-click=\"historyClicked(commit)\">\n" +
    "        <div ng-if=\"isLoading(commit)\" class=\"diff-loading loom-loading\" spinner-hidden=\"false\"></div>\n" +
    "        <div class=\"commit-summary progress\">\n" +
    "          <div class=\"progress-bar progress-bar-add\" ng-style=\"commit.summary.added\">\n" +
    "            <span class=\"sr-only\"></span>\n" +
    "          </div>\n" +
    "          <div class=\"progress-bar progress-bar-modify\" ng-style=\"commit.summary.modified\">\n" +
    "            <span class=\"sr-only\"></span>\n" +
    "          </div>\n" +
    "          <div class=\"progress-bar progress-bar-delete\" ng-style=\"commit.summary.removed\">\n" +
    "            <span class=\"sr-only\"></span>\n" +
    "          </div>\n" +
    "          <div ng-if=\"commit.summary == null || commit.summary == undefined\" class=\"progress-bar progress-bar-none\">\n" +
    "            <span class=\"sr-only\"></span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <span ng-if=\"isMerge(commit)\" class=\"glyphicon glyphicon-random merged\" tooltip-placement=\"top\"\n" +
    "              tooltip=\"{{'merge_commit' | translate}}\" tooltip-append-to-body=\"true\"></span>\n" +
    "        <div class=\"author-name ellipsis\">{{getCommitAuthor(commit)}}</div>\n" +
    "        <div class=\"commit-time ellipsis\">{{getCommitTime(commit)}}</div>\n" +
    "\n" +
    "      </li>\n" +
    "      <li ng-if=\"historyService.nextPage\" class=\"list-group-item\">\n" +
    "        <div class=\"history-loading loom-loading\" spinner-hidden=\"false\"></div>\n" +
    "      </li>\n" +
    "      <li class=\"history-last-list-item\">\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("layers/partials/layerinfo.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("layers/partials/layerinfo.tpl.html",
    "<div class=\"modal-body\">\n" +
    "  <div ng-show=\"name\">\n" +
    "    <div><h4 translate=\"server_name\"></h4></div>\n" +
    "    <div class=\"well\">{{name}}</div>\n" +
    "  </div>\n" +
    "  <div ng-show=\"title\">\n" +
    "    <div><h4 translate=\"title\"></h4></div>\n" +
    "    <div class=\"well\">{{title}}</div>\n" +
    "  </div>\n" +
    "  <div ng-show=\"workspace\">\n" +
    "    <div><h4 translate=\"workspace\"></h4></div>\n" +
    "    <div class=\"well\">{{workspace}}</div>\n" +
    "  </div>\n" +
    "  <div ng-show=\"featureType\">\n" +
    "    <div><h4 translate=\"featuretype\"></h4></div>\n" +
    "    <div class=\"well\">{{featureType}}</div>\n" +
    "  </div>\n" +
    "  <div ng-show=\"abstract\">\n" +
    "    <div><h4 translate=\"abstract\"></h4></div>\n" +
    "    <div class=\"well\">{{abstract}}</div>\n" +
    "  </div>\n" +
    "  <div ng-show=\"keywords\">\n" +
    "    <div><h4 translate=\"keywords\"></h4></div>\n" +
    "    <div class=\"well\">{{keywords}}</div>\n" +
    "  </div>\n" +
    "  <div ng-show=\"srs\">\n" +
    "    <div><h4 translate=\"srs\"></h4></div>\n" +
    "    <div class=\"well\">{{srs}}</div>\n" +
    "  </div>\n" +
    "  <div ng-show=\"serverName\">\n" +
    "    <div><h4 translate=\"server\"></h4></div>\n" +
    "    <div class=\"well\">{{serverName}}</div>\n" +
    "  </div>\n" +
    "  <div ng-show=\"serverURL\">\n" +
    "    <div><h4 translate=\"server_url\"></h4></div>\n" +
    "    <div class=\"well\">{{serverURL}}</div>\n" +
    "  </div>\n" +
    "  <div ng-show=\"repoName\">\n" +
    "    <div><h4 translate=\"repo\"></h4></div>\n" +
    "    <div class=\"well\">{{repoName}}</div>\n" +
    "  </div>\n" +
    "  <div ng-show=\"branchName\">\n" +
    "    <div><h4 translate=\"branch\"></h4></div>\n" +
    "    <div class=\"well\">{{branchName}}</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "</div>");
}]);

angular.module("layers/partials/layers.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("layers/partials/layers.tpl.html",
    "<div id=\"layerpanel-group\" class=\"panel-group loom-arrangeable layer-container\" arrangeable-handle=\"div.layer-heading\"\n" +
    "     arrangeable-item-selector=\"div.panel\" arrangeable-callback=\"reorderLayer\"\n" +
    "     arrangeable-placeholder='<div class=\"placeholder\"></div>'>\n" +
    "  <div class=\"panel\"\n" +
    "       ng-repeat=\"layer in layers = mapService.map.getLayers().getArray() | reverse | filter:filterInternalLayers\">\n" +
    "    <div class=\"panel-heading layer-heading {{ layer.get('metadata').config.group }}\" data-toggle=\"collapse\" ng-class=\"{'placeholder-layer': layer.get('metadata').placeholder}\"\n" +
    "         data-parent=\"#layerpanel-group\" data-target=\"#{{layer.get('metadata').uniqueID}}\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"layer-title ellipsis\" ng-class=\"{'placeholder-layer-title': layer.get('metadata').placeholder}\">\n" +
    "          {{layer.get('metadata').title}}\n" +
    "        </div>\n" +
    "        <div class=\"layer-buttons\">\n" +
    "            <span ng-click=\"featureManagerService.startFeatureInsert(layer)\" tooltip-append-to-body=\"true\"\n" +
    "                tooltip-placement=\"top\" tooltip=\"{{'add_feature' | translate}}\"\n" +
    "                ng-show=\"layer.get('metadata').editable\" stop-event=\"click mousedown\" class=\"btn btn-xs btn-default\"\n" +
    "                ng-disabled=\"(!layer.get('visible') || !layer.get('metadata').schema || layer.get('metadata').readOnly)\">\n" +
    "            <i class=\"glyphicon glyphicon-pencil\"></i>&nbsp;{{'edit_feature' | translate}}\n" +
    "          </span>\n" +
    "          <span ng-click=\"toggleVisibility(layer)\" stop-event=\"click mousedown\" tooltip-append-to-body=\"true\"\n" +
    "                ng-show=\"!layer.get('metadata').placeholder\" tooltip-placement=\"top\" tooltip=\"{{'toggle_visibility' | translate}}\"\n" +
    "                class=\"btn btn-xs btn-default layer-visible-button\" ng-class=\"{'layer-visible': layer.get('visible')}\">\n" +
    "            <i class=\"glyphicon\"\n" +
    "               ng-class=\"{'glyphicon-eye-close': !layer.get('visible'), 'glyphicon-eye-open': layer.get('visible')}\"></i>\n" +
    "          </span>\n" +
    "          <i tooltip-append-to-body=\"true\" tooltip-placement=\"top\" tooltip=\"{{'disabled_layer' | translate}}\"\n" +
    "             ng-show=\"layer.get('metadata').placeholder\" class=\"placeholder-layer-symbol glyphicon glyphicon-ban-circle\"></i>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div id=\"{{layer.get('metadata').uniqueID}}\" class=\"panel-collapse collapse\">\n" +
    "      <div class=\"panel-body layer-inner-panel\">\n" +
    "        <div class=\"btn-group-wrap\">\n" +
    "          <div class=\"btn-group\">\n" +
    "            <a type=\"button\" ng-init=\"layer.get('metadata').active_btn = 'show_attributes'\" ng-click=\"layer.get('metadata').active_btn = 'show_attributes'\" tooltip-append-to-body=\"true\"\n" +
    "               tooltip-placement=\"top\" tooltip=\"{{'show_attributes' | translate}}\"\n" +
    "               class=\"btn btn-sm btn-default\">\n" +
    "              <i class=\"glyphicon glyphicon-home\"></i>\n" +
    "            </a>\n" +
    "            <a type=\"button\" ng-show=\"!layer.get('metadata').placeholder\" ng-click=\"zoomToData(layer)\" tooltip-append-to-body=\"true\"\n" +
    "               tooltip-placement=\"top\" tooltip=\"{{'zoom_to_data' | translate}}\"\n" +
    "               class=\"btn btn-sm btn-default\">\n" +
    "              <div class=\"loom-loading\" spinner-radius=\"16\" spinner-hidden=\"!zooming\"></div>\n" +
    "              <i class=\"glyphicon glyphicon-resize-small\"></i>\n" +
    "            </a>\n" +
    "            <a type=\"button\" ng-click=\"showTable(layer)\" ng-show=\"layer.get('metadata').editable\"\n" +
    "               class=\"btn btn-sm btn-default\" tooltip-append-to-body=\"true\"\n" +
    "               tooltip-placement=\"top\" tooltip=\"{{'show_table' | translate}}\">\n" +
    "              <div class=\"loom-loading\" spinner-radius=\"16\" spinner-hidden=\"!isLoadingTable(layer)\"></div>\n" +
    "              <i class=\"glyphicon glyphicon-list\"></i>\n" +
    "            </a>\n" +
    "              <a type=\"button\" ng-click=\"layer.get('metadata').active_btn = 'style_layer';\" ng-show=\"layer.get('metadata').has_style && layer.get('metadata').editable \"\n" +
    "               class=\"btn btn-sm btn-default\" tooltip-append-to-body=\"true\"\n" +
    "               tooltip-placement=\"top\" tooltip=\"{{'style_layer' | translate}}\" ng-disabled=\"(!layer.get('visible') || !layer.get('metadata').schema || layer.get('metadata').readOnly)\">\n" +
    "              <i class=\"glyphicon glyphicon-tint\"></i>\n" +
    "            </a>\n" +
    "            <a type=\"button\" ng-click=\"showHeatmap(layer)\" ng-show=\"layer.get('metadata').editable == true\"\n" +
    "               class=\"btn btn-sm btn-default\" tooltip-append-to-body=\"true\"\n" +
    "               tooltip-placement=\"top\" tooltip=\"{{'show_heatmap' | translate}}\">\n" +
    "              <div class=\"loom-loading\" spinner-radius=\"16\" spinner-hidden=\"!isLoadingHeatmap(layer)\"></div>\n" +
    "              <i class=\"glyphicon glyphicon-fire\"></i>\n" +
    "            </a>\n" +
    "            <a type=\"button\" ng-show=\"isGeogig(layer)\" ng-click=\"showHistory(layer)\"\n" +
    "               class=\"btn btn-sm btn-default\" tooltip-append-to-body=\"true\"\n" +
    "               tooltip-placement=\"top\" tooltip=\"{{'show_history' | translate}}\">\n" +
    "              <div class=\"loom-loading\" spinner-radius=\"16\" spinner-hidden=\"!isLoadingHistory(layer)\"></div>\n" +
    "              <i class=\"glyphicon glyphicon-time\"></i>\n" +
    "            </a>\n" +
    "            <a type=\"button\" ng-show=\"!layer.get('metadata').placeholder && !layer.get('metadata').heatmapLayer\"\n" +
    "               tooltip-append-to-body=\"true\" ng-click=\"getLayerInfo(layer)\"\n" +
    "               tooltip-placement=\"top\" tooltip=\"{{'show_layer_info' | translate}}\"\n" +
    "               class=\"btn btn-sm btn-default\">\n" +
    "              <i class=\"glyphicon glyphicon-info-sign\"></i>\n" +
    "            </a>\n" +
    "            <a type=\"button\" ng-click=\"removeLayer(layer)\" id=\"remove-button\"\n" +
    "               class=\"btn btn-sm btn-default\" tooltip-append-to-body=\"true\"\n" +
    "               tooltip-placement=\"top\" tooltip=\"{{'remove_layer' | translate}}\">\n" +
    "              <i class=\"glyphicon glyphicon-trash\"></i>\n" +
    "            </a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <label id=\"attribute-label\" for=\"attributeRow\" ng-show=\"layer.get('metadata').editable && layer.get('metadata').active_btn == 'show_attributes'\">{{'attributes' |\n" +
    "          translate}}</label>\n" +
    "\n" +
    "        <div id=\"attributeRow\" class=\"row\" ng-show=\"layer.get('metadata').editable && layer.get('metadata').active_btn == 'show_attributes'\">\n" +
    "          <ul class=\"list-group\">\n" +
    "            <li class=\"list-group-item\" ng-repeat=\"attribute in getAttrList(layer)\">\n" +
    "              <div class=\"attribute-value ellipsis\">{{attribute._name}}</div>\n" +
    "              <div class=\"layer-buttons\">\n" +
    "              <span ng-click=\"toggleAttributeVisibility(attribute)\"\n" +
    "                    class=\"btn btn-xs btn-default layer-visible-button\"\n" +
    "                    ng-class=\"{'layer-visible': attribute.visible}\">\n" +
    "                <i class=\"glyphicon\" ng-class=\"{'glyphicon-eye-close': !attribute.visible, 'glyphicon-eye-open': attribute.visible}\"></i>\n" +
    "              </span>\n" +
    "              </div>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "\n" +
    "        <label id=\"style-label\" for=\"styleRow\" ng-show=\"layer.get('metadata').editable && layer.get('metadata').has_style && layer.get('metadata').active_btn == 'style_layer'\">&nbsp;</label>\n" +
    "\n" +
    "          <div id=\"styleRow\" class=\"row\" ng-show=\"layer.get('metadata').editable && layer.get('metadata').active_btn == 'style_layer'\">\n" +
    "        <style-editor class=\"minheight\" control=\"{carousel:true, default:false}\" layer=\"layer\" ng-show=\"layer.get('metadata').editable\" on-change=\"styleChanged\"></style-editor>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("legend/partial/legend.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("legend/partial/legend.tpl.html",
    "<div>\n" +
    "    <div id=\"legend-btn-border\" class=\"map-btn-border\" tooltip-placement=\"left\" tooltip-append-to-body=\"true\"\n" +
    "         tooltip=\"{{'toggle_legend' | translate}}\">\n" +
    "        <div id=\"legend-btn\" ng-click=\"toggleLegend()\">\n" +
    "            <i class=\"glyphicon glyphicon-list-alt\"></i>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div id=\"legend-container\" class=\"panel\">\n" +
    "        <div id=\"legend-panel\" class=\"panel collapse legend-panel-body\">\n" +
    "            <div id=\"legend-title-heading\" class=\"panel-heading\">\n" +
    "                <div class=\"legend-panel-title pull-left\" id=\"legend-title-text\" translate=\"legend_title\"></div>\n" +
    "                <i class=\"glyphicon glyphicon-remove legend-panel-title pull-right\" ng-click=\"toggleLegend()\"></i>\n" +
    "            </div>\n" +
    "            <div class=\"panel in legend-panel-body\" ng-repeat=\"layer in mapService.getLayers();\">\n" +
    "                <div class=\"panel-heading legend-item-header\" data-toggle=\"collapse\"\n" +
    "                    data-target=\"{{'#' + layer.get('metadata').uniqueID + 'legend'}}\">{{layer.get('metadata').title}}\n" +
    "                </div>\n" +
    "                <div class=\"panel-collapse legend-item in legend-panel-body\" id=\"{{layer.get('metadata').uniqueID + 'legend'}}\">\n" +
    "                    <img ng-src=\"{{getLegendUrl(layer)}}\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("map/partial/chapterdelete.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("map/partial/chapterdelete.tpl.html",
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button id=\"removeChapter\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" ng-click=\"storyService.remove_chapter()\">Yes</button>\n" +
    "    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("map/partial/mapproperties.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("map/partial/mapproperties.tpl.html",
    "<div class=\"modal-body\">\n" +
    "    <form class=\"form-horizontal col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"mapTitle\">{{ 'title' | translate }}</label> <input id=\"mapTitle\" ng-model=\"storyService.title\" type=\"text\" class=\"form-control\" value=\"{{storyService.title}}\" placeholder=\"{{storyService.title || ('title' | translate)}}\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"mapAbstract\">Summary</label><textarea id=\"mapAbstract\" ng-model=\"storyService.abstract\" class=\"form-control\" rows=\"4\" value=\"{{storyService.abstract}}\" placeholder=\"Summary\"></textarea>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"id_category\" class=\"control-label  \">\n" +
    "                    Category\n" +
    "                </label>\n" +
    "                <div class=\"\">\n" +
    "                    <select class=\"form-control\" id=\"id_category\" name=\"category\" ng-model=\"storyService.category\">\n" +
    "                        <option value=\"\" selected=\"selected\">---------</option>\n" +
    "                        <option value=\"1\">Biography</option>\n" +
    "                        <option value=\"13\">Crisis</option>\n" +
    "                        <option value=\"3\">Culture & Ideas</option>\n" +
    "                        <option value=\"6\">Geopolitics</option>\n" +
    "                        <option value=\"2\">Health</option>\n" +
    "                        <option value=\"11\">Human Settlement</option>\n" +
    "                        <option value=\"9\">Nature & Environment</option>\n" +
    "                        <option value=\"19\">Science & Industry</option>\n" +
    "                    </select>\n" +
    "                    <p class=\"help-block\">high-level geographic data thematic classification to assist in the grouping and search of available geographic data sets.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"mapKeywords\">Keywords</label><textarea id=\"mapKeywords\" ng-model=\"storyService.keywords\" class=\"form-control\" value=\"{{storyService.keywords}}\"></textarea>\n" +
    "                <p class=\"help-block\">commonly used word(s) or formalised word(s) or phrase(s) used to describe the subject (space or comma-separated).</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">{{'save_btn' | translate}}</button>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("map/partial/mapsave.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("map/partial/mapsave.tpl.html",
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">{{'close_btn' | translate }}</button>\n" +
    "    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-disabled=\"!configService.username\"\n" +
    "          ng-click=\"storyService.save()\">Save as Draft</button>\n" +
    "    <!-- If they pick publish, set the published model to true? -->\n" +
    "  <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-disabled=\"!configService.username\"\n" +
    "          ng-click=\"storyService.is_published = true; storyService.save();\">Publish</button>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("map/partial/savemap.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("map/partial/savemap.tpl.html",
    "<div class=\"modal-body\">\n" +
    "    <form class=\"form-horizontal col-md-12\">\n" +
    "        <div class=\"form-group\">\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"mapTitle\">{{ 'title' | translate }}</label> <input id=\"mapTitle\" ng-model=\"mapService.title\" type=\"text\" class=\"form-control\" value=\"{{mapService.title}}\" placeholder=\"{{mapService.title || ('title' | translate)}}\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"mapAbstract\">{{ 'abstract' | translate }}</label><textarea id=\"mapAbstract\" ng-model=\"mapService.abstract\" class=\"form-control\" rows=\"4\" value=\"{{mapService.abstract}}\" placeholder=\"{{mapService.abstract || ('abstract' | translate)}}\"></textarea>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">{{'close_btn' | translate }}</button>\n" +
    "  <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-disabled=\"!configService.username\"\n" +
    "          ng-click=\"mapService.save(true)\" ng-show=\"mapService.id\" >{{'save_copy_btn' | translate}}</button>\n" +
    "  <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" ng-disabled=\"!configService.username\"\n" +
    "          ng-click=\"mapService.save()\">{{'save_btn' | translate}}</button>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("merge/partials/merge.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("merge/partials/merge.tpl.html",
    "<div class=\"modal-body\">\n" +
    "  <div id=\"merge-loading\" class=\"loom-loading\" spinner-width=\"6\" spinner-radius=\"40\" spinner-hidden=\"!merging\"></div>\n" +
    "  <form class=\"form-horizontal\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <select class=\"form-control\" ng-model=\"selectedRepoId\">\n" +
    "          <option ng-repeat=\"repo in geogigService.repos | filter:{unique:'true'}\" value=\"{{repo.id}}\" ng-selected=\"\">{{repo.name}}</option>\n" +
    "        </select>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-3\" ng-hide=\"!selectedRepoId\">\n" +
    "        <select class=\"form-control\" ng-model=\"sourceBranch\" ng-options=\"branch for branch in geogigService.getRepoById(selectedRepoId).branches\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-2\" ng-hide=\"!selectedRepoId\">\n" +
    "        <p class=\"form-control-static text-center\" translate=\"into\">into</p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-3\" ng-hide=\"!selectedRepoId\">\n" +
    "        <select class=\"form-control\" ng-model=\"destinationBranch\" ng-options=\"branch for branch in geogigService.getRepoById(selectedRepoId).branches | filter:listFilter(sourceBranch)\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"cancel()\" translate=\"cancel_btn\">Cancel</button>\n" +
    "    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!mergePossible()\"\n" +
    "      ng-click=\"onMerge()\" translate=\"merge\">Merge</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modal/partials/dialog.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modal/partials/dialog.tpl.html",
    "<div class=\"loom-dialog {{type}}\" ng-style=\"{'margin-left':{{modalOffset}},'margin-top':{{modalOffset}}}\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <i ng-if=\"closeButton\" ng-click=\"$close()\" class=\"close glyphicon glyphicon-remove\"></i>\n" +
    "    <h4 class=\"modal-title\">{{dialogTitle}}</h4>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    {{dialogContent}}\n" +
    "  </div>\n" +
    "  <div ng-if=\"buttons.length > 0\" class=\"modal-footer\">\n" +
    "    <div align=\"center\">\n" +
    "      <button class=\"btn btn-default\" type=\"button\" ng-repeat=\"button in buttons\" ng-click=\"buttonClick($index)\">\n" +
    "        {{button}}\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("modal/partials/modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modal/partials/modal.tpl.html",
    "<div class=\"modal fade custom\" data-backdrop=\"static\" data-keyboard=\"false\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "          <i ng-if=\"closeButton\" ng-click=\"closeModal()\" class=\"close glyphicon glyphicon-remove\"></i>\n" +
    "        <h4 class=\"modal-title\" translate=\"{{title}}\">{{title}}</h4>\n" +
    "      </div>\n" +
    "      <div ng-transclude style=\"height: 100%\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("modal/partials/password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modal/partials/password.tpl.html",
    "<div class=\"loom-password-dialog loom-dialog {{type}}\" ng-style=\"{'margin-left':{{modalOffset}},'margin-top':{{modalOffset}}}\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <i ng-if=\"closeButton\" ng-click=\"cancel()\" class=\"close glyphicon glyphicon-remove\"></i>\n" +
    "    <h4 class=\"modal-title\" translate=\"credentials\"></h4>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <span translate=\"enter_credentials\"></span>\n" +
    "    <br><b>{{serverURL}}</b><br>\n" +
    "    <span translate=\"skip_credentials\"></span>\n" +
    "    <div>\n" +
    "      <label class=\"control-label\"><span translate=\"repo_username\"></span>: </label>\n" +
    "      <input type=\"text\" ng-model=\"username\" class=\"form-control\"\n" +
    "               placeholder=\"{{'repo_username' | translate}}\">\n" +
    "      <label class=\"control-label\"><span translate=\"repo_password\"></span>: </label>\n" +
    "      <input type=\"password\" ng-model=\"password\" class=\"form-control\"\n" +
    "             placeholder=\"{{'repo_password' | translate}}\">\n" +
    "    </div>\n" +
    "    <div ng-if=\"username === ''\" class=\"row anonymous-section\">\n" +
    "      <div class=\"loom-check-button btn btn-xs anonymous-checkbox\" ng-model=\"anonymousOnly.value\" btn-checkbox>\n" +
    "        <i class=\"glyphicon\" ng-class=\"{'glyphicon-unchecked': !anonymousOnly.value, 'glyphicon-check': anonymousOnly.value}\"></i>\n" +
    "      </div>\n" +
    "      <div class=\"anonymous-title\" translate=\"always_anonymous\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <div align=\"center\">\n" +
    "      <button ng-if=\"username !== ''\" class=\"btn btn-default\" type=\"button\" ng-click=\"ok(username, password)\" translate=\"btn_ok\">\n" +
    "      </button>\n" +
    "      <button class=\"btn btn-default\" type=\"button\" ng-click=\"skip(anonymousOnly.value)\" translate=\"skip\">\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("notifications/partial/generatenotification.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("notifications/partial/generatenotification.tpl.html",
    "<div class=\"modal-body\">\n" +
    "  <div class=\"history-loading loom-loading\" spinner-width=\"4\" spinner-radius=\"48\" spinner-hidden=\"!isLoading\"></div>\n" +
    "  <form ng-if=\"!contentHidden\" class=\"form\">\n" +
    "    <div ng-if=\"active\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <datetimepicker date-object=\"startDate[0]\"></datetimepicker>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"cancel()\">{{'cancel_btn' | translate}}</button>\n" +
    "    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"onDiff()\">{{'summarize_btn' | translate}}</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("notifications/partial/notificationbadge.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("notifications/partial/notificationbadge.tpl.html",
    "<div>\n" +
    "  <span class=\"notification-badge badge\" ng-if=\"notificationService.unreadCount() > 0\">{{notificationService.unreadCount()}}</span>\n" +
    "</div>");
}]);

angular.module("notifications/partial/notifications.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("notifications/partial/notifications.tpl.html",
    "<div class=\"notification-content\">\n" +
    "  <div id=\"notification-collapse-group\" class=\"panel-group\">\n" +
    "    <div ng-if=\"notificationService.getNotifications().length == 0\"\n" +
    "         class=\"notification-panel-heading panel-heading flat read\" >{{emptyText}}\n" +
    "    </div>\n" +
    "    <div class=\"panel\"\n" +
    "         ng-repeat=\"notification in notifications = notificationService.getNotifications() | orderBy:'id':true\">\n" +
    "      <div id=\"update-notification-header-{{notification.id}}\" ng-click=\"markAsRead(notification.id)\"\n" +
    "           ng-class=\"{read: notification.read}\" class=\"notification-panel-heading panel-heading flat\">\n" +
    "        <div class=\"row col-xs-12\">\n" +
    "                    <span>\n" +
    "                        <p id=\"notification-text-{{notification.id}}\" class=\"notification-text\">\n" +
    "                          {{notification.text}}</p>\n" +
    "                        <span class=\"notification-time\">{{notification.timestr}}</span>\n" +
    "                        <div stop-event='click' ng-click=\"removeNotification(notification.id)\" id=\"close-button-{{notification.id}}\"\n" +
    "                             class=\"glyphicon glyphicon-remove-circle close-notification\"></div>\n" +
    "                    </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div id=\"notification-description-{{notification.id}}\" ng-if=\"notification.type === 'loom-update-notification'\"\n" +
    "           class=\"loom-update-notification\" notification=\"notification\">{{notification.text}}\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("search/partial/search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/partial/search.tpl.html",
    "<div class=\"panel flat\" id=\"search-panel\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <em>\n" +
    "      <form ng-submit=\"performSearch()\">\n" +
    "        <div class=\"input-group input-group-sm\">\n" +
    "          <input type=\"text\" ng-change=\"clearResults()\" ng-model=\"searchQuery\" class=\"search-box form-control\" placeholder=\"{{'search_locations' | translate}}\">\n" +
    "                <span class=\"input-group-btn\">\n" +
    "                  <a class=\"btn btn-default\" ng-click=\"performSearch()\" type=\"button\">\n" +
    "                    <div class=\"loom-loading\" spinner-radius=\"16\" spinner-hidden=\"!searchInProgress\">\n" +
    "                    </div>\n" +
    "                    <i ng-if=\"!displayingResults()\" class=\"glyphicon glyphicon-search\"></i>\n" +
    "                    <i ng-if=\"displayingResults()\" class=\"glyphicon glyphicon-remove\"></i>\n" +
    "                  </a>\n" +
    "                </span>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "    </em>\n" +
    "  </div>\n" +
    "  <div id=\"search-results-panel\" class=\"search-content panel-collapse collapse\">\n" +
    "    <div id=\"search-collapse-group\" class=\"panel-group\">\n" +
    "      <ul class=\"list-group\">\n" +
    "        <li class=\"list-group-item\" ng-click=\"resultClicked(result)\"\n" +
    "            ng-repeat=\"result in searchResults\" tooltip-popup-delay=\"500\" tooltip-placement=\"right\" tooltip-append-to-body=\"true\" tooltip=\"{{result.name}}\">\n" +
    "          <span class=\"ellipsis search-result-name\">{{result.name}}</span>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("statistics/partial/statistics.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statistics/partial/statistics.tpl.html",
    "<div class=\"modal-body\">\n" +
    "  <div class=\"panel-body\">\n" +
    "      <h4>Summary Statistics for {{data.fieldname}}.</h4>\n" +
    "\n" +
    "      <!--<div loom-statistics-bar-graph bar-height=\"20\" bar-padding=\"5\" margin=\"300\" data=\"{{data.barData}}\"></div>-->\n" +
    "        <div class=\"btn-group\" id=\"statistics-btns\">\n" +
    "          <a type=\"button\" ng-click=\"selectChart('histogram')\" tooltip-append-to-body=\"true\" ng-if=\"fieldTypeSupportsHistogram(data.statistics.type)\"\n" +
    "             tooltip-placement=\"top\" tooltip=\"{{'view_histogram' | translate}}\"\n" +
    "             class=\"btn btn-sm btn-default\" ng-class=\"{disabled: isSelected('histogram')}\">\n" +
    "            <i class=\"glyphicon glyphicon-stats\"></i>\n" +
    "          </a>\n" +
    "          <a type=\"button\" ng-click=\"selectChart('pie')\"\n" +
    "             class=\"btn btn-sm btn-default\" tooltip-append-to-body=\"true\" ng-if=\"fieldTypeSupportsHistogram(data.statistics.type)\"\n" +
    "             tooltip-placement=\"top\" tooltip=\"{{'show_pie_chart' | translate}}\" ng-class=\"{disabled: isSelected('pie')}\">\n" +
    "            <i class=\"glyphicon glyphicon-adjust\"></i>\n" +
    "          </a>\n" +
    "          <a type=\"button\" ng-click=\"selectChart('date_heatmap')\"\n" +
    "             class=\"btn btn-sm btn-default\" tooltip-append-to-body=\"true\" ng-if=\"fieldTypeSupportsDateHeatMap(data.statistics.type)\"\n" +
    "             tooltip-placement=\"top\" tooltip=\"{{'show_date_heatmap' | translate}}\" ng-class=\"{disabled: isSelected('date_heatmap')}\">\n" +
    "            <i class=\"glyphicon glyphicon-calendar\"></i>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "\n" +
    "      <ul id=\"statistics-hud-bar\">\n" +
    "        <li class=\"table-center statistics-hud-group\" ng-if=\"data.statistics.mean\">\n" +
    "          <div class=\"statistics-title\">{{'mean' | translate | lowercase}}</div>\n" +
    "          <div class=\"statistics-value\">{{data.statistics.mean | number:2 | removeCharacters:\".00\"}}</div>\n" +
    "        </li>\n" +
    "        <li class=\"table-center statistics-hud-group\" ng-if=\"data.statistics.median\">\n" +
    "          <div class=\"statistics-title\">{{'median' | translate | lowercase}}</div>\n" +
    "          <div class=\"statistics-value\">{{data.statistics.median | number:2 | removeCharacters:\".00\"}}</div>\n" +
    "        </li>\n" +
    "        <li class=\"table-center statistics-hud-group\" ng-if=\"data.statistics.max\">\n" +
    "          <div class=\"statistics-title\">{{'maximum' | translate | lowercase}}</div>\n" +
    "          <div class=\"statistics-value\">{{data.statistics.max | number:2 | removeCharacters:\".00\"}}</div>\n" +
    "        </li>\n" +
    "        <li class=\"table-center statistics-hud-group\" ng-if=\"data.statistics.min\">\n" +
    "          <div class=\"statistics-title\">{{'minimum' | translate | lowercase}}</div>\n" +
    "          <div class=\"statistics-value\">{{data.statistics.min | number:2 | removeCharacters:\".00\"}}</div>\n" +
    "        </li>\n" +
    "        <li class=\"table-center statistics-hud-group\" ng-if=\"data.statistics.sum\">\n" +
    "          <div class=\"statistics-title\">{{'sum' | translate | lowercase}}</div>\n" +
    "          <div class=\"statistics-value\">{{data.statistics.sum | number:2 | removeCharacters:\".00\"}}</div>\n" +
    "        </li>\n" +
    "        <li class=\"table-center statistics-hud-group\" ng-if=\"data.statistics.range\">\n" +
    "          <div class=\"statistics-title\">{{'range' | translate | lowercase}}</div>\n" +
    "          <div class=\"statistics-value\">{{data.statistics.range | number:2 | removeCharacters:\".00\"}}</div>\n" +
    "        </li>\n" +
    "        <li class=\"table-center statistics-hud-group\" ng-if=\"data.statistics.stdDev\">\n" +
    "          <div class=\"statistics-title\">{{'standard_deviation' | translate | lowercase}}</div>\n" +
    "          <div class=\"statistics-value\">{{data.statistics.stdDev | number:2 | removeCharacters:\".00\"}}</div>\n" +
    "        </li>\n" +
    "        <li class=\"table-center statistics-hud-group\" ng-if=\"data.statistics.variance\">\n" +
    "          <div class=\"statistics-title\">{{'variance' | translate | lowercase}}</div>\n" +
    "          <div class=\"statistics-value\">{{data.statistics.variance | number:2 | removeCharacters:\".00\"}}</div>\n" +
    "        </li>\n" +
    "        <li class=\"table-center statistics-hud-group\" ng-if=\"data.statistics.totalCount\">\n" +
    "          <div class=\"statistics-title\">{{'count' | translate | lowercase}}</div>\n" +
    "          <div class=\"statistics-value\">{{data.statistics.totalCount | number:0}}</div>\n" +
    "        </li>\n" +
    "        <li class=\"table-center statistics-hud-group\" ng-if=\"data.statistics.populatedCount\">\n" +
    "          <div class=\"statistics-title\">{{'populated_count' | translate | lowercase}}</div>\n" +
    "          <div class=\"statistics-value\">{{data.statistics.populatedCount | number:0}}</div>\n" +
    "        </li>\n" +
    "        <li class=\"table-center statistics-hud-group\" ng-if=\"data.statistics.uniqueValueCount\">\n" +
    "          <div class=\"statistics-title\">{{'unique_values' | translate | lowercase}}</div>\n" +
    "          <div class=\"statistics-value\">{{data.statistics.uniqueValueCount | number:0}}</div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "\n" +
    "      <div id=\"statistics-chart-area\">\n" +
    "        <div id=\"loom-statistics-legend\"></div>\n" +
    "        <div loom-statistics-chart id=\"loom-statistics-chart\"></div>\n" +
    "      </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("storybox/partials/addstorybox.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("storybox/partials/addstorybox.tpl.html",
    "<div class=\"modal-body\">\n" +
    "    <form class=\"form-horizontal col-md-12\">\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"title\">Title</label>\n" +
    "\n" +
    "            <div>\n" +
    "                <input ng-model=\"box.title\" ng-required class=\"form-control\" id=\"title\" placeholder=\"Title\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"description\">Description</label>\n" +
    "\n" +
    "            <div>\n" +
    "                <textarea ng-model=\"box.description\" class=\"form-control\" id=\"description\"\n" +
    "                          placeholder=\"Description\"></textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-5\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"start_time\">Start Time</label>\n" +
    "\n" +
    "                    <div>\n" +
    "                        <!--input ng-model=\"box.start_time\" class=\"form-control\" id=\"start_time\" placeholder=\"Start time\"-->\n" +
    "                         <datetimepicker date-object=\"box.start_time\" default-date=\"inserting\"></datetimepicker>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-5 pull-right\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"end_time\">End Time</label>\n" +
    "\n" +
    "                    <div>\n" +
    "                        <!--input ng-model=\"box.end_time\" class=\"form-control\" id=\"end_time\" placeholder=\"End time\"-->\n" +
    "                         <datetimepicker date-object=\"box.end_time\" default-date=\"inserting\"></datetimepicker>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <button type=\"button\" style=\"margin-left:-15px;\"\n" +
    "                ng-if=\"currentServer.lazy && currentServer.layersConfig.length===0 && !currentServer.populatingLayersConfig\"\n" +
    "                tooltip=\"This server is configured to lazily load layers.\" tooltip-placement=\"right\"\n" +
    "                class=\"btn btn-default\"\n" +
    "                ng-click=\"serverService.populateLayersConfig(serverService.getServerById(currentServerId), true)\">\n" +
    "            <i class=\"glyphicon glyphicon-save\"></i>\n" +
    "            <span>{{'fetch_layers_from_server' | translate}}</span>\n" +
    "        </button>\n" +
    "        <div class=\"add-layers-loading loom-loading\" spinner-hidden=\"!currentServer.populatingLayersConfig\"></div>\n" +
    "        <!--pre>box = {{box | json}}</pre-->\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" translate=\"close_btn\">Close</button>\n" +
    "    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"addStoryBox(box)\" data-dismiss=\"modal\"\n" +
    "            translate=\"add_btn\">Add\n" +
    "    </button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("storybox/partials/boxinfo.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("storybox/partials/boxinfo.tpl.html",
    "<div class=\"modal-body\">\n" +
    "    <div ng-show=\"range\">\n" +
    "        <div class=\"well\">{{range}}</div>\n" +
    "    </div>\n" +
    "    <div ng-show=\"title\">\n" +
    "        <div><h4 translate=\"title\"></h4></div>\n" +
    "        <div class=\"well\">{{title}}</div>\n" +
    "    </div>\n" +
    "    <div ng-show=\"description\">\n" +
    "        <div><h4 translate=\"description\"></h4></div>\n" +
    "        <div class=\"well\">{{description}}</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "</div>");
}]);

angular.module("storybox/partials/storyboxes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("storybox/partials/storyboxes.tpl.html",
    "<div id=\"storyboxpanel-group\" class=\"panel-group loom-arrangeable storybox-container\">\n" +
    "  <div class=\"panel\"\n" +
    "       ng-repeat=\"storyBox in layers = boxService.getBoxes()\">\n" +
    "    <div class=\"panel-heading storybox-heading\" data-toggle=\"collapse\" ng-class=\"{'placeholder-layer': storyBox.title}\"\n" +
    "         data-parent=\"#storyboxpanel-group\" data-target=\"#{{storyBox.id}}\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"layer-title ellipsis\" ng-class=\"{'placeholder-storybox-title': storyBox.title}\">\n" +
    "          {{storyBox.title }}\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div id=\"{{storyBox.id}}\" class=\"panel-collapse collapse\">\n" +
    "      <div class=\"panel-body layer-inner-panel\">\n" +
    "        <div class=\"btn-group-wrap\">\n" +
    "          <div class=\"btn-group\">\n" +
    "            <a type=\"button\" ng-show=\"storyBox\" ng-click=\"zoomToBox(storyBox)\" tooltip-append-to-body=\"true\"\n" +
    "               tooltip-placement=\"top\" tooltip=\"{{'zoom_to_storybox' | translate}}\"\n" +
    "               class=\"btn btn-sm btn-default\">\n" +
    "              <div class=\"loom-loading\" spinner-radius=\"16\" spinner-hidden=\"!zooming\"></div>\n" +
    "              <i class=\"glyphicon glyphicon-resize-small\"></i>\n" +
    "            </a>\n" +
    "            <a type=\"button\" ng-show=\"storyBox\"\n" +
    "               tooltip-append-to-body=\"true\" ng-click=\"getBoxInfo(storyBox)\"\n" +
    "               tooltip-placement=\"top\" tooltip=\"{{'show_storybox_info' | translate}}\"\n" +
    "               class=\"btn btn-sm btn-default\">\n" +
    "              <i class=\"glyphicon glyphicon-info-sign\"></i>\n" +
    "            </a>\n" +
    "            <a type=\"button\" ng-click=\"removeBox(storyBox)\" id=\"remove-button\"\n" +
    "               class=\"btn btn-sm btn-default\" tooltip-append-to-body=\"true\"\n" +
    "               tooltip-placement=\"top\" tooltip=\"{{'remove_storybox' | translate}}\">\n" +
    "              <i class=\"glyphicon glyphicon-trash\"></i>\n" +
    "            </a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("sync/partials/addsync.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sync/partials/addsync.tpl.html",
    "<div id=\"loading\" class=\"hidden\">\n" +
    "  <div class=\"loading\">\n" +
    "    <!-- We make this div spin -->\n" +
    "    <div class=\"spinner\">\n" +
    "      <!-- Mask of the quarter of circle -->\n" +
    "      <div class=\"mask\">\n" +
    "        <!-- Inner masked circle -->\n" +
    "        <div class=\"maskedCircle\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"syncform\" class=\"form-horizontal\">\n" +
    "    <div class=\"form-group\" ng-class=\"{'has-error': !syncform.syncname.$valid}\">\n" +
    "      <div class=\"col-md-2\">\n" +
    "        <label>{{'server_name' | translate}}: </label>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-10\">\n" +
    "        <input name=\"syncname\" ng-minlength=\"1\" ng-model=\"name\" type=\"text\" class=\"form-control\" placeholder=\"{{'server_name' | translate}}\" required>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <div class=\"col-md-2\">\n" +
    "        <label>{{'repo' | translate}}: </label>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-5\">\n" +
    "        <select class=\"form-control\" ng-model=\"selectedRepo\" required ng-options=\"repo.name for repo in geogigService.adminRepos | filter:{unique:'true'}\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-5\">\n" +
    "        <select class=\"form-control\" ng-show=\"selectedRepo\" ng-model=\"localBranch\" required ng-options=\"branch for branch in geogigService.getRepoById(selectedRepo.id).branches\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <div class=\"col-md-2\">\n" +
    "        <label>{{'remote' | translate}}: </label>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-5\">\n" +
    "        <select class=\"form-control\" ng-show=\"selectedRepo\" ng-model=\"selectedRemote\" required ng-options=\"remote.name for remote in geogigService.getRepoById(selectedRepo.id).remotes\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-5\">\n" +
    "        <select class=\"form-control\" ng-show=\"selectedRemote\" ng-model=\"remoteBranch\" required ng-options=\"branch for branch in geogigService.getRepoById(selectedRepo.id).remotes[selectedRemote.id].branches\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button type=\"button\" class=\"btn btn-default\" translate=\"close_btn\" ng-click=\"dismiss()\">Close</button>\n" +
    "  <button type=\"button\" class=\"btn btn-primary\"\n" +
    "          ng-click=\"createLink(name, selectedRepo, selectedRemote, localBranch, remoteBranch)\"\n" +
    "          ng-disabled=\"!syncform.$valid\" translate=\"add_btn\">Add</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("sync/partials/remoteselect.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sync/partials/remoteselect.tpl.html",
    "<div class=\"modal-body\">\n" +
    "  <div class=\"row\"><p translate=\"multiple_compatible_repos\"></p></div>\n" +
    "  <br>\n" +
    "  <select class=\"form-control\" ng-model=\"selectedRepo\" required ng-options=\"repo for repo in remoteService.compatibleRepos\">\n" +
    "  </select>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button type=\"button\" class=\"btn btn-primary\" ng-click=\"finish()\"\n" +
    "          ng-disabled=\"!selectedRepo\" translate=\"continue_btn\">Continue</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("sync/partials/syncconfig.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sync/partials/syncconfig.tpl.html",
    "<div id=\"remote-loading\" class=\"loom-loading\" spinner-width=\"6\" spinner-radius=\"40\" spinner-hidden=\"!saving\"></div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form name=\"remoteform\" class=\"form-horizontal\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <div class=\"col-md-2\">\n" +
    "        <label class=\"control-label\"><span translate=\"repo\"></span>: </label>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-10\">\n" +
    "        <select class=\"form-control\" ng-model=\"remoteService.selectedRepo\" required ng-options=\"repo.name for repo in geogigService.adminRepos | filter:{unique:'true'}\" ng-disabled=\"remoteService.editing\">\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-show=\"remoteService.selectedRepo\">\n" +
    "      <div class=\"col-md-2\">\n" +
    "        <label class=\"control-label\"><span translate=\"remote\"></span>: </label>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-5\">\n" +
    "        <div class=\"btn-group custom-width-100\">\n" +
    "          <button type=\"button\" class=\"btn btn-default dropdown-toggle custom-width-100\" data-toggle=\"dropdown\" ng-disabled=\"remoteService.editing\">\n" +
    "            <span class=\"pull-left\"> {{remoteService.selectedText}} </span>\n" +
    "            <span class=\"caret right-and-center\"></span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu server-list col-md-12\">\n" +
    "            <li ng-repeat=\"remote in remoteService.selectedRepo.remotes\"><a ng-click=\"remoteService.selectRemote(remote)\">{{remote.name}}</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li><a ng-click=\"remoteService.selectRemote(null)\" translate=\"new_remote\">New Remote</a></li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <hr>\n" +
    "    <div class=\"form-group\" ng-show=\"remoteService.selectedRepo\" ng-class=\"{'has-error': !remoteform.remotename.$valid}\">\n" +
    "      <div class=\"col-md-2\">\n" +
    "        <label class=\"control-label\"><span translate=\"remote_name\"></span>: </label>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-10\">\n" +
    "        <input id=\"remote-name\" name=\"remotename\" ng-model=\"remoteService.remoteName\" ng-minlength=\"1\" type=\"text\" class=\"form-control\" placeholder=\"{{'remote_name' | translate}}\" required  ng-disabled=\"!remoteService.editing && remoteService.selectedRemote\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-show=\"remoteService.selectedRepo\" ng-class=\"{'has-error': !remoteform.remoteurl.$valid}\">\n" +
    "      <div class=\"col-md-2\">\n" +
    "        <label class=\"control-label\"><span translate=\"repo_url\"></span>: </label>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-10\">\n" +
    "        <input name=\"remoteurl\" ng-model=\"remoteService.remoteURL\" type=\"url\" class=\"form-control\" placeholder=\"http://url/geoserver/geogig/uuid\" required ng-disabled=\"!remoteService.editing && remoteService.selectedRemote\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\" ng-show=\"remoteService.selectedRepo\">\n" +
    "      <div class=\"col-md-2\">\n" +
    "        <label class=\"control-label\"><span translate=\"repo_username\"></span>: </label>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <input id=\"remoteUsername\" type=\"text\" ng-model=\"remoteService.remoteUsername\" class=\"form-control\" placeholder=\"{{'repo_username' | translate}}\" ng-disabled=\"!remoteService.editing && remoteService.selectedRemote\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-2\">\n" +
    "        <label class=\"control-label\"><span translate=\"repo_password\"></span>: </label>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <input id=\"remotePassword\" type=\"password\" ng-model=\"remoteService.remotePassword\" class=\"form-control\" placeholder=\"{{'repo_password' | translate}}\" ng-disabled=\"!remoteService.editing && remoteService.selectedRemote\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button type=\"button\" ng-show=\"remoteService.selectedRemote && !remoteService.editing\" class=\"btn btn-default\" ng-click=\"remoteService.startEditing()\" translate=\"edit_btn\">\n" +
    "    Edit\n" +
    "  </button>\n" +
    "  <button type=\"button\" ng-show=\"remoteService.selectedRemote && !remoteService.editing\" class=\"btn btn-danger\" ng-click=\"remoteService.removeRemote()\"\n" +
    "          translate=\"remove_btn\">Remove\n" +
    "  </button>\n" +
    "  <button type=\"button\" class=\"btn btn-default\" ng-show=\"remoteService.editing || !remoteService.selectedRemote\" ng-disabled=\"!remoteform.$valid\" translate=\"save_btn\" ng-click=\"finish(true)\">Save</button>\n" +
    "  <button type=\"button\" class=\"btn btn-default\" ng-show=\"remoteService.editing\" ng-click=\"finish(false)\" translate=\"cancel_btn\">Cancel</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("sync/partials/synclinks.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sync/partials/synclinks.tpl.html",
    "<div class=\"row\" id=\"SyncRow\">\n" +
    "  <ul id=\"SyncList\" class=\"list-group col-md-12\">\n" +
    "    <li id=\"buttonRow\" class=\"list-group-item col-md-12\">\n" +
    "      <div class=\"btn-group btn-group-justified\">\n" +
    "        <a id=\"AddSyncButton\" class=\"btn sync-list-button\" data-target=\"#addSyncWindow\"\n" +
    "           data-toggle=\"modal\">\n" +
    "          <i class=\"glyphicon glyphicon-plus-sign\"></i>\n" +
    "          <span translate=\"add_sync\">Add Sync</span>\n" +
    "        </a>\n" +
    "        <a id=\"MergeButton\" class=\"btn sync-list-button\" data-target=\"#mergeWindow\"\n" +
    "           data-toggle=\"modal\">\n" +
    "          <i class=\"glyphicon glyphicon-resize-small\"></i>\n" +
    "          <span translate=\"merge\">Merge</span>\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "    <li ng-repeat=\"link in syncService.getLinks()\" class=\"list-group-item\" ng-controller=\"modalToggle\"\n" +
    "        ng-click=\"syncService.loadLink($index)\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-8 ellipsis\">{{link.name}}</div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "          <div class=\"btn-group pull-left\" stop-event=\"click\">\n" +
    "            <button ng-click=\"singleSync(link)\" ng-disabled=\"link.continuous\" data-toggle=\"button\"\n" +
    "                    class=\"btn btn-xs btn-default\" tooltip-append-to-body=\"true\"\n" +
    "                    tooltip-placement=\"top\" tooltip=\"{{'single_sync' | translate}}\">\n" +
    "              <span class=\"loom-loading\" spinner-radius=\"16\" spinner-hidden=\"!link.singleSync\"></span>\n" +
    "              <i class=\"glyphicon glyphicon-sort\"></i>\n" +
    "            </button>\n" +
    "            <div ng-click=\"syncService.toggleAutoSync(link)\" stop-event=\"click mousedown\"\n" +
    "                 class=\"btn btn-xs btn-default\" ng-class=\"{'sync-on': link.continuous}\" tooltip-append-to-body=\"true\"\n" +
    "                 tooltip-placement=\"top\" tooltip=\"{{'continuous_sync' | translate}}\">\n" +
    "              <i class=\"glyphicon glyphicon-retweet\"></i>\n" +
    "            </div>\n" +
    "            <!--<button type=\"button\" class=\"btn btn-xs btn-default dropdown-toggle\" ng-disabled=\"link.isSyncing\" data-toggle=\"dropdown\">\n" +
    "              <span class=\"caret\"></span>\n" +
    "            </button>\n" +
    "            <ul class=\"dropdown-menu\">\n" +
    "              <li class=\"dropdown-header\">{{'synchronize' | translate}}</li>\n" +
    "              <li>\n" +
    "                <a ng-click=\"link.setContinuous(false)\">\n" +
    "                  <i ng-hide=\"link.continuous\" class=\"glyphicon glyphicon-check pull-right\"></i>\n" +
    "                  <span translate=\"single\">Single</span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "              <li>\n" +
    "                <a ng-click=\"link.setContinuous(true)\">\n" +
    "                  <i ng-show=\"link.continuous\" class=\"glyphicon glyphicon-check pull-right\"></i>\n" +
    "                  <span translate=\"continuous\">Continuous</span>\n" +
    "                </a>\n" +
    "              </li>\n" +
    "            </ul>-->\n" +
    "          </div>\n" +
    "          <i ng-class=\"{'remote-up': link.getIsActive()}\" class=\"glyphicon glyphicon-certificate remote pull-right\"></i>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>");
}]);

angular.module("tableview/partial/filteroptions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tableview/partial/filteroptions.tpl.html",
    "<div class=\"input-group filter-input-group\">\n" +
    "    <input ng-if=\"filterType !== 'date' && filterType !== 'datetime' && filterType !== 'time'\" class=\"form-control\" type=\"text\" ng-model=\"attribute.filter.text\"\n" +
    "           ng-change=\"checkFilterStatus()\" ng-disabled=\"attribute.filter.searchType === 'numRange'\">\n" +
    "    <datetimepicker id=\"start-date\" class=\"no-radius\" style=\"padding-top: 15px\" date-object=\"attribute.filter.text\" ng-disabled=\"attribute.filter.searchType === 'numRange'\"\n" +
    "                    ng-if=\"filterType === 'datetime'\" default-date=\"false\" seperate-time=\"false\"></datetimepicker>\n" +
    "    <datetimepicker id=\"start-date\" class=\"no-radius\" style=\"padding-top: 15px\" date-object=\"attribute.filter.text\" ng-disabled=\"attribute.filter.searchType === 'numRange'\"\n" +
    "                    ng-if=\"filterType === 'date'\" default-date=\"false\" time=\"false\" seperate-time=\"false\"></datetimepicker>\n" +
    "    <datetimepicker id=\"start-date\" class=\"no-radius\" style=\"padding-top: 15px\" date-object=\"attribute.filter.text\" ng-disabled=\"attribute.filter.searchType === 'numRange'\"\n" +
    "                    ng-if=\"filterType === 'time'\" default-date=\"false\" date=\"false\" seperate-time=\"false\"></datetimepicker>\n" +
    "    <div class=\"input-group-btn\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" ng-class=\"{'dirty-filter': dirty}\">\n" +
    "            <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\">\n" +
    "            <li>\n" +
    "                <a value=\"exactMatch\" ng-click=\"exactMatch(); $event.stopPropagation();\" class=\"filter-option\"\n" +
    "                   ng-class=\"{'filter-options-selected': (attribute.filter.searchType === 'exactMatch')}\">\n" +
    "                  {{'exact_match' | translate}}\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li ng-switch=\"filterType\">\n" +
    "                <a ng-switch-when=\"number\" ng-click=\"numRange(); updateFilterText; $event.stopPropagation();\"\n" +
    "                   class=\"filter-option date-time-option\"\n" +
    "                   ng-class=\"{'filter-options-selected': (attribute.filter.searchType === 'numRange')}\">\n" +
    "                  {{'range' | translate}}\n" +
    "                </a>\n" +
    "                  <form ng-switch-when=\"number\" class=\"form-horizontal\" ng-click=\"numRange(); updateFilterText; $event.stopPropagation();\" ng-if=\"attribute.filter.searchType === 'numRange'\">\n" +
    "                    <div class=\"advanced-filter\">\n" +
    "                    <table class=\"range-filter-table\">\n" +
    "                      <tbody>\n" +
    "                        <tr class=\"form-group\">\n" +
    "                          <td><label for=\"start-num\" valign=\"middle\" class=\"col-sm-2 control-label range-label\">{{'from' | translate}}:</label></td>\n" +
    "                          <td><input id=\"start-num\" type=\"text\" class=\"col-sm-12 form-control\" ng-model=\"attribute.filter.start\" ng-change=\"checkFilterStatus()\"></td>\n" +
    "                        </tr>\n" +
    "                        <tr class=\"form-group\">\n" +
    "                          <td><label for=\"end-num\" class=\"col-sm-2 control-label range-label\">{{'to' | translate}}:</label></td>\n" +
    "                          <td><input id=\"end-num\" type=\"text\" class=\"col-sm-12 form-control\" ng-model=\"attribute.filter.end\" ng-change=\"checkFilterStatus()\"></td>\n" +
    "                        </tr>\n" +
    "                      </tbody>\n" +
    "                    </table>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "                <a ng-switch-when=\"text\" ng-click=\"strContains(); $event.stopPropagation();\" class=\"filter-option\"\n" +
    "                   ng-class=\"{'filter-options-selected': (attribute.filter.searchType === 'strContains')}\">\n" +
    "                  {{'contains' | translate}}\n" +
    "                </a>\n" +
    "                <a ng-switch-when=\"datetime\" ng-click=\"numRange(); updateFilterText; $event.stopPropagation();\"\n" +
    "                   class=\"filter-option date-time-option\" ng-blur=\"updateFilterText()\"\n" +
    "                   ng-class=\"{'filter-options-selected': (attribute.filter.searchType === 'numRange')}\">\n" +
    "                  {{'range' | translate}}\n" +
    "                </a>\n" +
    "                <form ng-switch-when=\"datetime\" class=\"form-horizontal\" ng-click=\"numRange(); updateFilterText; $event.stopPropagation();\">\n" +
    "                  <div class=\"advanced-filter\" ng-if=\"attribute.filter.searchType === 'numRange'\">\n" +
    "                    <table class=\"range-filter-table\">\n" +
    "                      <tbody>\n" +
    "                      <tr>\n" +
    "                        <td><label for=\"start-date\" class=\"col-sm-2 control-label range-label\">{{'from' | translate}}:</label></td>\n" +
    "                        <td><datetimepicker id=\"start-date\" class=\"col-sm-12\" date-object=\"attribute.filter.start\"\n" +
    "                                            default-date=\"false\" seperate-time=\"false\"></datetimepicker></td>\n" +
    "                      </tr>\n" +
    "                      <tr>\n" +
    "                        <td><label for=\"end-date\" class=\"col-sm-2 control-label range-label\">{{'to' | translate}}:</label></td>\n" +
    "                        <td><datetimepicker id=\"end-date\" class=\"col-md-12\" date-object=\"attribute.filter.end\"\n" +
    "                                            default-date=\"false\" seperate-time=\"false\"></datetimepicker></td>\n" +
    "                      </tr>\n" +
    "                      </tbody>\n" +
    "                    </table>\n" +
    "                  </div>\n" +
    "                </form>\n" +
    "                <a ng-switch-when=\"date\" ng-click=\"numRange(); updateFilterText; $event.stopPropagation();\"\n" +
    "                   class=\"filter-option date-time-option\" ng-blur=\"updateFilterText()\"\n" +
    "                   ng-class=\"{'filter-options-selected': (attribute.filter.searchType === 'numRange')}\">\n" +
    "                    {{'range' | translate}}\n" +
    "                </a>\n" +
    "                <form ng-switch-when=\"date\" class=\"form-horizontal\" ng-click=\"numRange(); updateFilterText; $event.stopPropagation();\">\n" +
    "                  <div class=\"advanced-filter\" ng-if=\"attribute.filter.searchType === 'numRange'\">\n" +
    "                      <table class=\"range-filter-table\">\n" +
    "                          <tbody>\n" +
    "                          <tr>\n" +
    "                              <td><label for=\"start-date\" class=\"col-sm-2 control-label range-label\">{{'from' | translate}}:</label></td>\n" +
    "                              <td><datetimepicker id=\"start-date\" class=\"col-sm-12\" date-object=\"attribute.filter.start\"\n" +
    "                                                  default-date=\"false\" seperate-time=\"false\" time=\"false\"></datetimepicker></td>\n" +
    "                          </tr>\n" +
    "                          <tr>\n" +
    "                              <td><label for=\"end-date\" class=\"col-sm-2 control-label range-label\">{{'to' | translate}}:</label></td>\n" +
    "                              <td><datetimepicker id=\"end-date\" class=\"col-md-12\" date-object=\"attribute.filter.end\"\n" +
    "                                                  default-date=\"false\" seperate-time=\"false\" time=\"false\"></datetimepicker></td>\n" +
    "                          </tr>\n" +
    "                          </tbody>\n" +
    "                      </table>\n" +
    "                  </div>\n" +
    "                </form>\n" +
    "                <a ng-switch-when=\"time\" ng-click=\"numRange(); updateFilterText; $event.stopPropagation();\"\n" +
    "                   class=\"filter-option date-time-option\" ng-blur=\"updateFilterText()\"\n" +
    "                   ng-class=\"{'filter-options-selected': (attribute.filter.searchType === 'numRange')}\">\n" +
    "                    {{'range' | translate}}\n" +
    "                </a>\n" +
    "                <form ng-switch-when=\"time\" class=\"form-horizontal\" ng-click=\"numRange(); updateFilterText; $event.stopPropagation();\">\n" +
    "                    <div class=\"advanced-filter\" ng-if=\"attribute.filter.searchType === 'numRange'\">\n" +
    "                        <table class=\"range-filter-table\">\n" +
    "                            <tbody>\n" +
    "                            <tr>\n" +
    "                                <td><label for=\"start-date\" class=\"col-sm-2 control-label range-label\">{{'from' | translate}}:</label></td>\n" +
    "                                <td><datetimepicker id=\"start-date\" class=\"col-sm-12\" date-object=\"attribute.filter.start\"\n" +
    "                                                    default-date=\"false\" seperate-time=\"false\" date=\"false\"></datetimepicker></td>\n" +
    "                            </tr>\n" +
    "                            <tr>\n" +
    "                                <td><label for=\"end-date\" class=\"col-sm-2 control-label range-label\">{{'to' | translate}}:</label></td>\n" +
    "                                <td><datetimepicker id=\"end-date\" class=\"col-md-12\" date-object=\"attribute.filter.end\"\n" +
    "                                                    default-date=\"false\" seperate-time=\"false\" date=\"false\"></datetimepicker></td>\n" +
    "                            </tr>\n" +
    "                            </tbody>\n" +
    "                        </table>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("tableview/partial/tableview.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tableview/partial/tableview.tpl.html",
    "<div class=\"modal-body\">\n" +
    "  <div id=\"table-loading\" class=\"loom-loading\" spinner-width=\"6\" spinner-radius=\"40\" spinner-hidden=\"!isSaving\"></div>\n" +
    "  <span ng-if=\"!advFilters\" class=\"table-search-group\">\n" +
    "    <div class=\"table-search-box input-group input-group-sm\">\n" +
    "      <input type=\"text\" class=\"form-control\" ng-change=\"search.isSearching = false\" ng-model=\"search.text\" placeholder=\"{{'search_table' | translate}}\">\n" +
    "      <span class=\"input-group-btn\">\n" +
    "        <a class=\"btn btn-default\" ng-click=\"searchTable()\" type=\"button\">\n" +
    "          <i ng-if=\"!search.isSearching\" class=\"glyphicon glyphicon-search\"></i>\n" +
    "          <i ng-if=\"search.isSearching\" class=\"glyphicon glyphicon-remove\"></i>\n" +
    "        </a>\n" +
    "      </span>\n" +
    "    </div>\n" +
    "  </span>\n" +
    "  <button ng-if=\"advFilters\" type=\"button\" class=\"filter-button btn btn-default table-btn\" ng-click=\"applyFilters()\"\n" +
    "          translate=\"apply_filters\" ng-disabled=\"tableviewform.$visible\">\n" +
    "  </button>\n" +
    "  <button ng-if=\"advFilters\" type=\"button\" class=\"filter-button btn btn-default table-btn\" ng-click=\"clearFilters()\"\n" +
    "          translate=\"clear_filters\" ng-disabled=\"tableviewform.$visible\">\n" +
    "  </button>\n" +
    "  <button type=\"button\" class=\"filter-button btn btn-default table-btn\" ng-click=\"toggleAdvancedFilters()\"\n" +
    "          translate=\"advanced_filters\" ng-disabled=\"tableviewform.$visible\" data-toggle=\"button\">\n" +
    "  </button>\n" +
    "    <!--<button ng-if=\"!advFilters\" type=\"button\" class=\"filter-button btn btn-default table-btn\" ng-click=\"toggleAdvancedFilters()\"-->\n" +
    "            <!--translate=\"advanced_filters\" ng-disabled=\"tableviewform.$visible\">-->\n" +
    "    <!--</button>-->\n" +
    "  <form editable-form name=\"tableviewform\" onaftersave=\"saveTable()\">\n" +
    "    <div class=\"panel panel-default\">\n" +
    "      <table class=\"table-striped table-hover\" ng-class=\"{sortable: isSortable}\">\n" +
    "        <thead>\n" +
    "          <tr ng-if=\"advFilters\" style=\"border-bottom: 2px solid #ddd;\">\n" +
    "              <td class=\"filter-row first-filter-row\">\n" +
    "                  <span class=\"filters-label\">{{'filter' | translate}}</span>\n" +
    "              </td>\n" +
    "              <td class=\"filter-row\" ng-repeat=\"attr in attributes\">\n" +
    "                  <!--<input class=\"form-control\" type=\"text\" ng-model=\"attr.filter.text\">-->\n" +
    "                  <filteroptions attribute=\"attr\" type=\"restrictions[attr.name].type\"></filteroptions>\n" +
    "              </td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th>{{'feature_id' | translate}}</th>\n" +
    "            <th ng-repeat=\"attr in attributes\" class=\"pointer\" ng-click=\"selectAttribute(attr)\" ng-class=\"{selectedAttribute: attr.selected}\">{{attr.name}}</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tr ng-repeat=\"row in rows\" ng-class=\"{selectedRow: row.selected}\" ng-click=\"selectFeature(row)\">\n" +
    "          <td>{{row.feature.id}}</td>\n" +
    "          <td ng-repeat=\"attr in attributes track by $index\" ng-class=\"{'table-editing': tableviewform.$visible}\">\n" +
    "            <div ng-switch on=\"restrictions[attr.name].type\" ng-class=\"{'wide-table-element': advFilters}\">\n" +
    "              <span ng-switch-when=\"\" editable-text=\"row.feature.properties[attr.name]\" e-form=\"tableviewform\"\n" +
    "                    e-style=\"width:160px\">{{row.feature.properties[attr.name]}}</span>\n" +
    "              <span ng-switch-when=\"noEdit\">{{row.feature.properties[attr.name]}}</span>\n" +
    "              <span ng-switch-when=\"int\" editable-text=\"row.feature.properties[attr.name]\" e-form=\"tableviewform\"\n" +
    "                    e-style=\"width:160px\">{{row.feature.properties[attr.name]}}</span>\n" +
    "              <span ng-switch-when=\"double\" editable-text=\"row.feature.properties[attr.name]\" e-form=\"tableviewform\"\n" +
    "                    e-style=\"width:160px\">{{row.feature.properties[attr.name]}}</span>\n" +
    "              <div ng-switch-when=\"datetime\">\n" +
    "                  <span ng-if=\"!tableviewform.$visible\">{{row.feature.properties[attr.name] | date:\"MM/dd/yyyy @ h:mm a\"}}</span>\n" +
    "                  <datetimepicker ng-if=\"tableviewform.$visible\" id=\"table-datetime\" date-object=\"row.feature.properties[attr.name]\"\n" +
    "                        default-date=\"false\" seperate-time=\"false\"></datetimepicker>\n" +
    "              </div>\n" +
    "                <div ng-switch-when=\"date\">\n" +
    "                    <span ng-if=\"!tableviewform.$visible\">{{row.feature.properties[attr.name] | date:\"MM/dd/yyyy\"}}</span>\n" +
    "                    <datetimepicker ng-if=\"tableviewform.$visible\" id=\"table-datetime\" date-object=\"row.feature.properties[attr.name]\"\n" +
    "                                    default-date=\"false\" seperate-time=\"false\" time=\"false\"></datetimepicker>\n" +
    "                </div>\n" +
    "                <div ng-switch-when=\"time\">\n" +
    "                    <span ng-if=\"!tableviewform.$visible\">{{row.feature.properties[attr.name] | date:\"h:mm a\"}}</span>\n" +
    "                    <datetimepicker ng-if=\"tableviewform.$visible\" id=\"table-datetime\" date-object=\"row.feature.properties[attr.name]\"\n" +
    "                                    default-date=\"false\" seperate-time=\"false\" date=\"false\"></datetimepicker>\n" +
    "                </div>\n" +
    "              <div ng-switch-default class=\"input-group\">\n" +
    "                <span ng-if=\"!tableviewform.$visible\">{{row.feature.properties[attr.name]}}</span>\n" +
    "                <div ng-if=\"tableviewform.$visible\" class=\"input-group-btn\" ng-class=\"{'dropup': $last}\">\n" +
    "                  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "                    <span class=\"caret\"></span>\n" +
    "                  </button>\n" +
    "                  <ul class=\"dropdown-menu\">\n" +
    "                    <li>\n" +
    "                      <a ng-click=\"selectValue(row.feature.properties, attr.name, null)\">&nbsp;</a>\n" +
    "                    </li>\n" +
    "                    <li ng-repeat=\"enum in restrictions[attr.name].type\">\n" +
    "                      <a ng-click=\"selectValue(row.feature.properties, attr.name, $index)\">{{enum._value}}</a>\n" +
    "                    </li>\n" +
    "                  </ul>\n" +
    "                </div>\n" +
    "                <input ng-if=\"tableviewform.$visible\" ng-model=\"row.feature.properties[attr.name]\" type=\"text\" class=\"table-dropdown form-control\" disabled/>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </td>\n" +
    "        </tr>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <div class=\"btn-group\">\n" +
    "      <button type=\"button\" class=\"btn btn-primary table-btn\" ng-click=\"tableviewform.$submit()\" ng-show=\"tableviewform.$visible\">{{'save_btn' | translate}}</button>\n" +
    "      <button type=\"button\" class=\"btn btn-default table-btn\" ng-click=\"tableviewform.$cancel(); applyFilters()\" ng-show=\"tableviewform.$visible\">{{'cancel_btn' | translate}}</button>\n" +
    "        <button type=\"button\" class=\"btn btn-default table-btn\" ng-click=\"tableviewform.$show()\"\n" +
    "            ng-show=\"!tableviewform.$visible && !readOnly\" tooltip=\"{{'edit_attributes' | translate}}\" tooltip-append-to-body=\"true\">\n" +
    "          <i class=\"glyphicon glyphicon-edit\"></i>\n" +
    "      </button>\n" +
    "      <button type=\"button\" class=\"btn btn-default table-btn\" ng-click=\"toggleWordWrap()\" tooltip=\"{{'word_wrap' | translate}}\" tooltip-append-to-body=\"true\">\n" +
    "          <i class=\"glyphicon glyphicon-text-width\"></i>\n" +
    "      </button>\n" +
    "      <button type=\"button\" class=\"btn btn-default table-btn\" ng-click=\"goToMap()\" ng-show=\"!tableviewform.$visible && selectedRow != null\" tooltip=\"{{'go_to_map' | translate}}\" tooltip-append-to-body=\"true\">\n" +
    "        <i class=\"glyphicon glyphicon-globe\"></i>\n" +
    "      </button>\n" +
    "      <button type=\"button\" class=\"btn btn-default table-btn\" ng-click=\"showHeatmap()\" tooltip=\"{{'show_heatmap' | translate}}\" tooltip-append-to-body=\"true\">\n" +
    "        <i class=\"glyphicon glyphicon-fire\"></i>\n" +
    "      </button>\n" +
    "      <button type=\"button\" ng-click=\"showStatistics()\" class=\"btn btn-default table-btn\" tooltip-append-to-body=\"true\"  ng-class=\"{disabled: !selectedAttribute}\"\n" +
    "         tooltip-placement=\"top\" tooltip=\"{{'statistics_view' | translate}}\" tooltip-append-to-body=\"true\">\n" +
    "        <div class=\"loom-loading\" spinner-radius=\"16\" spinner-hidden=\"!isLoadingStatistics()\"></div>\n" +
    "        <i class=\"glyphicon glyphicon-stats\"></i>\n" +
    "      </button>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--<div id=\"table-page-nav\">-->\n" +
    "        <button id='previous-page-btn' type=\"button\" class=\"btn btn-default table-btn\"\n" +
    "                ng-controller=\"previous-tt-controller\" ng-click=\"onPrevious()\" ng-disabled=\"currentPage < 2\"\n" +
    "                tooltip=\"{{'previous_page' | translate}}\" tooltip-append-to-body=\"true\">\n" +
    "            <i class=\"glyphicon glyphicon-chevron-left\"></i>\n" +
    "        </button>\n" +
    "        <div class=\"table-page-indicator\">{{getPageText()}}</div>\n" +
    "        <button id='next-page-btn' type=\"button\" class=\"btn btn-default table-btn\"\n" +
    "                ng-controller=\"next-tt-controller\" ng-click=\"onNext()\" ng-disabled=\"currentPage >= totalPages\"\n" +
    "                tooltip=\"{{'next_page' | translate}}\" tooltip-append-to-body=\"true\">\n" +
    "            <i class=\"glyphicon glyphicon-chevron-right\"></i>\n" +
    "        </button>\n" +
    "    <!--</div>-->\n" +
    "\n" +
    "    <div class=\"table-view-footer-text no-select\">{{totalFeatures | number:0}} {{'features' | translate}}</div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("timeline/partials/timeline.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("timeline/partials/timeline.tpl.html",
    "<div class=\"timeline-background2\" ng-show=\"timelineServiceEnabled\">\n" +
    "    <div style=\"margin: auto;\">\n" +
    "        <a type=\"button\" ng-click=\"onPlay()\" tooltip-append-to-body=\"true\" tooltip-placement=\"top\" tooltip=\"Play\"\n" +
    "           class=\"btn btn-md btn-default playback\" ng-if=\"!isPlaying()\">\n" +
    "            <i class=\"glyphicon glyphicon-play\"></i>\n" +
    "        </a>\n" +
    "        <a type=\"button\" ng-click=\"onPause()\" tooltip-append-to-body=\"true\" tooltip-placement=\"top\" tooltip=\"Pause\"\n" +
    "           class=\"btn btn-md btn-default playback\" ng-if=\"isPlaying()\">\n" +
    "            <i class=\"glyphicon glyphicon-pause\"></i>\n" +
    "        </a>\n" +
    "        <input class=\"timeline-slider\" type=\"range\" min=\"0\" max=\"100\" step=\"1\" list=\"timesliderTickDataList\" ng-model=\"timeCurrentPercent\" data-trigger=\"manual focus\" data-toggle=\"popover\" data-placement=\"top\" data-animation=\"false\">\n" +
    "        <!-- Will populate dynamically -->\n" +
    "        <datalist id=\"timesliderTickDataList\">\n" +
    "        </datalist>\n" +
    "        <div class=\"btn-group\">\n" +
    "            <a type=\"button\" ng-class=\"{'active': getRepeat()}\" ng-click=\"setRepeat(!getRepeat())\" tooltip-append-to-body=\"true\" tooltip-placement=\"top\" tooltip=\"Repeat\"\n" +
    "               class=\"btn btn-md btn-default playback\">\n" +
    "                <i class=\"glyphicon glyphicon-repeat\"></i>\n" +
    "            </a>\n" +
    "            <a type=\"button\" ng-click=\"onPrevTick()\" tooltip-append-to-body=\"true\" tooltip-placement=\"top\" tooltip=\"Step Backward\"\n" +
    "               class=\"btn btn-md btn-default playback\">\n" +
    "                <i class=\"glyphicon glyphicon-step-backward\"></i>\n" +
    "            </a>\n" +
    "            <a type=\"button\" ng-click=\"onNextTick()\" tooltip-append-to-body=\"true\" tooltip-placement=\"top\" tooltip=\"Step Forward\"\n" +
    "               class=\"btn btn-md btn-default playback\">\n" +
    "                <i class=\"glyphicon glyphicon-step-forward\"></i>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <a type=\"button\" ng-class=\"{'active': getFilterByTime()}\" ng-click=\"setFilterByTime(!getFilterByTime())\" tooltip-append-to-body=\"true\" tooltip-placement=\"top\" tooltip=\"Filter Features By Timeline\"\n" +
    "           class=\"btn btn-md btn-default playback\">\n" +
    "            <i class=\"glyphicon glyphicon-filter\"></i>\n" +
    "        </a>\n" +
    "        <a type=\"button\" ng-click=\"toggleTimeline()\" tooltip-append-to-body=\"true\" tooltip-placement=\"top\" tooltip=\"Toggle Timeline\"\n" +
    "           class=\"btn btn-md btn-default playback\">\n" +
    "            <i class=\"glyphicon glyphicon-time\"></i>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "     <div id=\"timeline\"></div>\n" +
    "</div>");
}]);

angular.module("updatenotification/partial/updatenotification.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("updatenotification/partial/updatenotification.tpl.html",
    "<div class=\"notification-description panel-collapse collapse\">\n" +
    "  <div ng-if=\"noFeatures\">\n" +
    "    <ul class=\"list-group\">\n" +
    "      <li class=\"list-group-item\">\n" +
    "        {{message}}\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "  <div ng-if=\"!noFeatures\" class=\"loom-diff-list\" add-list=\"adds\" modify-list=\"modifies\" delete-list=\"deletes\"\n" +
    "       merge-list=\"merges\" conflict-list=\"conflicts\" click-callback=\"notification.callback\"></div>\n" +
    "</div>");
}]);

angular.module("utils/partial/loading.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("utils/partial/loading.tpl.html",
    "<div class=\"loading-container\" ng-class=\"{'hidden':spinnerHidden}\">\n" +
    "  <div class=\"loading\">\n" +
    "    <!-- We make this div spin -->\n" +
    "    <div class=\"spinner\">\n" +
    "      <!-- Mask of the quarter of circle -->\n" +
    "      <div class=\"mask\">\n" +
    "        <!-- Inner masked circle -->\n" +
    "        <div class=\"loading-spinner\"></div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);
