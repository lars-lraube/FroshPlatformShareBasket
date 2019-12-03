(this.webpackJsonp=this.webpackJsonp||[]).push([["frosh-platform-share-basket"],{"3WDi":function(e){e.exports=JSON.parse('{"frosh-share-basket":{"general":{"mainMenuItemGeneral":"Artikel in gesp. Warenkörben","descriptionTextModule":"Übersicht der gespeicherten Artikel"},"list":{"columnProductNumber":"Artikelnummer","columnProductName":"Artikel","columnProductSaveCount":"Gespeichert","columnProductQuantity":"Menge"}}}')},ETdz:function(e,t,s){},J7SC:function(e,t){e.exports='{% block frosh_share_basket_list %}\n    <sw-page class="frosh-share-basket-list">\n        <template slot="content">\n            {% block frosh_share_basket_list_content %}\n                <sw-entity-listing\n                    v-if="items"\n                    :items="items"\n                    :repository="repository"\n                    :showSelection="false"\n                    :columns="columns">\n                </sw-entity-listing>\n            {% endblock %}\n        </template>\n\n        {% block sw_newsletter_recipient_list_sidebar %}\n        <sw-sidebar slot="sidebar">\n            {% block sw_newsletter_recipient_list_sidebar_refresh %}\n                <sw-sidebar-item\n                    icon="default-arrow-360-left"\n                    :title="$tc(\'frosh-share-basket.list.titleSidebarItemRefresh\')"\n                    @click="onRefresh">\n                </sw-sidebar-item>\n            {% endblock %}\n\n            {% block frosh_share_basket_list_sidebar %}\n            <sw-sidebar-item\n                ref="filterSideBar"\n                icon="default-action-filter"\n                :title="$tc(\'frosh-share-basket.list.titleSidebarItemFilter\')"\n                @sw-sidebar-item-close-content="closeContent"\n                @click="closeContent">\n\n                {% block frosh_share_basket_list_sidebar_filter_sales_channel %}\n                <sw-sidebar-collapse>\n                    <template slot="header">{{ $tc(\'frosh-share-basket.general.salesChannel\') }}</template>\n                    <template slot="content">\n                        {% block frosh_share_basket_list_sidebar_filter_sales_channel_items %}\n                        <div v-for="(item, index) in salesChannelFilters">\n                            <sw-newsletter-recipient-filter-switch\n                                :id="item.id"\n                                group="salesChannelId"\n                                :label="item.translated.name"\n                                @change="onChange">\n                            </sw-newsletter-recipient-filter-switch>\n                        </div>\n                        {% endblock %}\n                    </template>\n                </sw-sidebar-collapse>\n                {% endblock %}\n\n\n            </sw-sidebar-item>\n            {% endblock %}\n\n        </sw-sidebar>\n        {% endblock %}\n\n    </sw-page>\n{% endblock %}\n'},iBkT:function(e){e.exports=JSON.parse('{"frosh-share-basket":{"general":{"mainMenuItemGeneral":"Artikel in gesp. Warenkörben","descriptionTextModule":"Übersicht der gespeicherten Artikel"},"list":{"columnProductNumber":"Artikelnummer","columnProductName":"Artikel","columnProductSaveCount":"Gespeichert","columnProductQuantity":"Menge"}}}')},r7uG:function(e,t,s){"use strict";s.r(t);var n=s("J7SC"),r=s.n(n);s("xlNF");const{Component:i,Mixin:a}=Shopware,{Criteria:l}=Shopware.Data;i.register("frosh-share-basket-list",{template:r.a,inject:["repositoryFactory","apiContext","syncService"],mixins:[a.getByName("listing")],data:()=>({isLoading:!1,items:null,total:0,repository:null,sortBy:"saveCount",sortDirection:"DESC",filterSidebarIsOpen:!1,salesChannelFilters:[],internalFilters:{}}),metaInfo(){return{title:this.$createTitle()}},computed:{columns(){return[{property:"lineItems.identifier",label:this.$t("frosh-share-basket.list.columnProductNumber"),allowResize:!0,primary:!0},{property:"salesChannel.name",label:this.$t("frosh-share-basket.list.columnProductName"),allowResize:!0},{property:"saveCount",label:this.$t("frosh-share-basket.list.columnProductSaveCount"),allowResize:!0},{property:"lineItems.quantity",label:this.$t("frosh-share-basket.list.columnProductQuantity"),allowResize:!0}]},languageStore(){return this.repositoryFactory.create("language")},salesChannelStore(){return this.repositoryFactory.create("sales_channel")}},created(){this.createdComponent()},methods:{createdComponent(){const e=new l(1,100);this.salesChannelStore.search(e,this.apiContext).then(e=>{this.salesChannelFilters=e}),this.getList()},handleBooleanFilter(e){if(Array.isArray(this[e.group])||(this[e.group]=[]),!e.value)return this[e.group]=this[e.group].filter(t=>t!==e.id),void(this[e.group].length>0?this.internalFilters[e.group]=l.equalsAny(e.group,this[e.group]):delete this.internalFilters[e.group]);this[e.group].push(e.id),this.internalFilters[e.group]=l.equalsAny(e.group,this[e.group])},onChange(e){null===e&&(e=[]),this.handleBooleanFilter(e),this.getList()},closeContent(){if(this.filterSidebarIsOpen)return this.$refs.filterSideBar.closeContent(),void(this.filterSidebarIsOpen=!1);this.$refs.filterSideBar.openContent(),this.filterSidebarIsOpen=!0},getList(){this.isLoading=!0;const e=new l(this.page,this.limit,this.term);return e.addSorting(l.sort(this.sortBy,this.sortDirection)),e.addAssociation("salesChannel"),Object.values(this.internalFilters).forEach(t=>{e.addFilter(t)}),this.syncService.httpClient.post("/frosh/sharebasket/statistics",e,{headers:this.syncService.getBasicHeaders()}).then(e=>{console.log(e),this.items=e.data.data,this.total=e.data.meta.total,this.isLoading=!1}).catch(()=>{this.isLoading=!1})}}});var o=s("iBkT"),h=s("3WDi");const{Module:c}=Shopware;c.register("frosh-share-basket",{type:"plugin",name:"ShareBasket",title:"frosh-share-basket.general.mainMenuItemGeneral",description:"frosh-share-basket.general.descriptionTextModule",color:"#079FDF",icon:"default-shopping-paper-bag-product",snippets:{"de-DE":o,"en-GB":h},routes:{list:{component:"frosh-share-basket-list",path:"list"}},navigation:[{label:"frosh-share-basket.general.mainMenuItemGeneral",color:"#079FDF",path:"frosh.share.basket.list",icon:"default-shopping-paper-bag-product",parent:"sw-marketing"}]})},xlNF:function(e,t,s){var n=s("ETdz");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,s("SZ7m").default)("7cbd0eb8",n,!0,{})}},[["r7uG","runtime","vendors-node"]]]);