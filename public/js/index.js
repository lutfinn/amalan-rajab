/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        navigation.init();
    },
};
var page = Object.create(null);
var navigation={

    init:function(){
        $(".navtarget").click(this.handleNavigation)
		
		page.pid = 'main';

		page.load = function (id, noreturn) {
			var that = this;
			$('.page').each(function() {
				console.log(page.pid);
				if ($(this).attr('id') == id) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});
		}
		this.pid = id;
    },
	
    handleNavigation:function(e){
        console.log("Hello")
        $(".section").hide();
        $($(this).attr("data-target")).show();
        return false;

    }
}