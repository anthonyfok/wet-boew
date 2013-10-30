/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- @%lang-en@ dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "@%lang-code@",
	"%lang-en": "@%lang-en@",
	"%lang-fr": "@%lang-fr@",
	"%lang-nat": "@%lang-nat@",
	"%all": "@%all@",
	"%home": "@%home@",
	"%main-page": "@%main-page@",
	"%tphp": "@%tphp@",
	"%you-are-in": "@%you-are-in@",
	"%welcome-to": "@%welcome-to@",
	"%loading": "@%loading@",
	"%processing": "@%processing@",
	"%srch": "@%srch@",
	"%srch-terms": "@%srch-terms@",
	"%no-match": "@%no-match@",
	"%matches": {
		"mixin": "@%matches@"
	},
	"%menu": "@%menu@",
	"%settings": "@%settings@",
	"%langs": "@%langs@",
	"%about": "@%about@",
	"%curr": "@%curr@",
	"%hide": "@%hide@",
	"%err": "@%err@",
	"%colon": "@%colon@",
	"%hyphen": "@%hyphen@",
	"%full-stop": "@%full-stop@",
	"%comma-space": "@%comma-space@",
	"%space": "@%space@",
	"%start": "@%start@",
	"%stop": "@%stop@",
	"%back": "@%back@",
	"%cancel": "@%cancel@",
	"%new-win": "@%new-win@",
	"%min-ago": "@%min-ago@",
	"%coup-mins": "@%coup-mins@",
	"%mins-ago": {
		"mixin": "@%mins-ago@"
	},
	"%hour-ago": "@%hour-ago@",
	"%hours-ago": {
		"mixin": "@%hours-ago@"
	},
	"%days-ago": {
		"mixin": "@%days-ago@"
	},
	"%yesterday": "@%yesterday@",

	"%nxt": "@%nxt@",
	"%nxt-r": "@%nxt-r@",
	"%prv": "@%prv@",
	"%prv-l": "@%prv-l@",
	"%first": "@%first@",
	"%last": "@%last@",
	"%close-esc": "@%close-esc@",
	"%show": "@%show@",

	/* Archived Web page template */
	"%arch-pg": "@%arch-pg@",
	/* Menu bar */
	"%sm-hlp": "@%sm-hlp@",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "@%tab-rot-off@",
		"on": "@%tab-rot-on@"
	},
	"%tab-list": "@%tab-list@",
	"%tab-pnl-end1": "@%tab-pnl-end1@",
	"%tab-pnl-end2": "@%tab-pnl-end2@",
	"%tab-pnl-end3": "@%tab-pnl-end3@",
	/* Multimedia player */
	"%play": "@%play@",
	"%pause": "@%pause@",
	"%open": "@%open@",
	"%close": "@%close@",
	"%rew": "@%rew@",
	"%ffwd": "@%ffwd@",
	"%mute": {
		"on": "@%mute-on@",
		"off": "@%mute-off@"
	},
	"%cc": {
		"off": "@%cc-off@",
		"on": "@%cc-on@"
	},
	"%cc-err": "@%cc-err@",
	"%adesc": {
		"on": "@%adesc-on@",
		"off": "@%adesc-off@"
	},
	"%prog-bar": "@%prog-bar@",
	"%no-video": "@%no-video@",
	"%pos": "@%pos@",
	"%perc": "@%perc@",
	"%dur": "@%dur@",
	"%buff": "@%buff@",
	/* Share widget */
	"%fav": "@%fav@",
	"%email": "@%email@",
	"%shr-txt": "@%shr-txt@",
	"%shr-hnt": "@%shr-hnt@",
	"%shr-email-sub": "@%shr-email-sub@",
	"%shr-email-bd": "@%shr-email-bd@",
	"%shr-fav-ttl": "@%shr-fav-ttl@",
	"%shr-man": "@%shr-man@",
	"%shr-all": "@%shr-all@",
	"%shr-all-ttl": "@%shr-all-ttl@",
	"%shr-disc": "@%shr-disc@",
	/* Form validation */
	"%frm-nosubmit": "@%frm-nosubmit@",
	"%errs-fnd": "@%errs-fnd@",
	"%err-fnd": "@%err-fnd@",
	/* Date picker */
	"%date-hide": "@%date-hide@",
	"%date-show": "@%date-show@",
	"%date-sel": "@%date-sel@",
	/* Calendar */
	"%days": ["@%days-1@", "@%days-2@", "@%days-3@", "@%days-4@", "@%days-5@", "@%days-6@", "@%days-7@"],
	"%mnths": ["@%mnths-1@", "@%mnths-2@", "@%mnths-3@", "@%mnths-4@", "@%mnths-5@", "@%mnths-6@", "@%mnths-7@", "@%mnths-8@", "@%mnths-9@", "@%mnths-10@", "@%mnths-11@", "@%mnths-12@"],
	"%cal": "@%cal@",
	"%currDay": "@%currDay@",
	"%cal-goToLnk": "@%cal-goToLnk@",
	"%cal-goToTtl": "@%cal-goToTtl@",
	"%cal-goToMnth": "@%cal-goToMnth@",
	"%cal-goToYr": "@%cal-goToYr@",
	"%cal-goToBtn": "@%cal-goToBtn@",
	"%prvMnth": "@%prvMnth@",
	"%nxtMnth": "@%nxtMnth@",
	/* Slideout */
	"%show-toc": "@%show-toc@",
	"%hide-toc": "@%hide-toc@",
	"%toc": "@%toc@",
	/* Lightbox */
	"%lb-curr": "@%lb-curr@",
	"%lb-xhr-err": "@%lb-xhr-err@",
	"%lb-img-err": "@%lb-img-err@",
	/* Charts widget */
	"%table-mention": "@%table-mention@",
	"%table-following": "@%table-following@",
	/* Session timeout */
	"%st-to-msg-bgn": "@%st-to-msg-bgn@",
	"%st-to-msg-end": "@%st-to-msg-end@",
	"%st-msgbx-ttl": "@%st-msgbx-ttl@",
	"%st-alrdy-to-msg": "@%st-alrdy-to-msg@",
	"%st-button-continue": "@%st-button-continue@",
	"%st-button-end": "@%st-button-end@",
	/* Toggle details */
	"%td-toggle": "@%td-toggle@",
	"%td-open": "@%td-open@",
	"%td-close": "@%td-close@",
	"%td-ttl-open": "@%td-ttl-open@",
	"%td-ttl-close": "@%td-ttl-close@",
	/* Table enhancement */
	"%sortAsc": "@%sortAsc@",
	"%sortDesc": "@%sortDesc@",
	"%emptyTbl": "@%emptyTbl@",
	"%sInfo": "@%sInfo@",
	"%sInfoEmpty": "@%sInfoEmpty@",
	"%infoFilt": "@%infoFilt@",
	"%info1000": "@%info1000@",
	"%lenMenu": "@%lenMenu@",
	/* Geomap */
	"%geo-mapcontrol": "@%geo-mapcontrol@",
	"%geo-zoomin": "@%geo-zoomin@",
	"%geo-zoomout": "@%geo-zoomout@",
	"%geo-zoomworld": "@%geo-zoomworld@",
	"%geo-zoomfeature": "@%geo-zoomfeature@",
	"%geo-scaleline": "@%geo-scaleline@",
	"%geo-mouseposition": "@%geo-mouseposition@",
	"%geo-ariamap": "@%geo-ariamap@",
	"%geo-accessibilize": "@%geo-accessibilize@",
	"%geo-accessibilizetitle": "@%geo-accessibilizetitle@",
	"%geo-togglelayer": "@%geo-togglelayer@",
	"%geo-hiddenlayer": "@%geo-hiddenlayer@",
	"%geo-basemapurl": "@%geo-basemapurl@",
	"%geo-basemaptitle": "@%geo-basemaptitle@",
	"%geo-basemapurltxt": "@%geo-basemapurltxt@",
	"%geo-attributionlink": "@%geo-attributionlink@",
	"%geo-attributiontitle": "@%geo-attributiontitle@",
	"%geo-select": "@%geo-select@",
	"%geo-labelselect": "@%geo-labelselect@",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "@%wb-disable@",
	"%wb-enable": "@%wb-enable@",
	/* Template */
	"%tmpl-signin": "@%tmpl-signin@"
};

window.i18nObj = ind;

})( window );