/* Developed by Nguyen Thanh | Copyright (C) 2017 4IT */
var rank;
(function () {
    var ranksUpdated;
    rank=new Vue({
        el: "#ranking",
        data: {
            endpoint: "https://4it.top/api/v1/rank",
            action:'top',
            ranks: [],
            uid: '',
            user:null,
            gid: '1415192401896193',
            error: !1,
            last:'',
            total:0,
            loading: !1,
            ranksUpdated:!1,
            top:50,
            tab:'top',
            fb:!1
        },
        mounted: function () {
            var action;
            if(action=$(this.$el).data('action')){
                this.action=action;
            }
            this.loadRank();
        },
        watch:{
            ranks:function() {
                this.ranksUpdated=true;
            }
        },
        updated: function () {
            this.$nextTick(function () {
                if(this.ranksUpdated){
                    //$('#rankTable').bootstrapTable('destroy');
                    //$('#rankTable').bootstrapTable();
                    //console.log('bs');
                }
            })
        },
        computed:{
            valid:function(){
                return !this.loading&&this.uid;
            },
            heading:function(){
                if(this.tab=='top'){
                    return 'Top '+this.top+' Users'
                }else if(this.user){
                    return this.user.fb_name+"'s Rank";
                }
            }
        },
        methods: {
            loadRank: function () {
                this.tab='top';
                this.loading=true;
                this.$http.get(this.endpoint + '/' + this.action + '?gid=' + this.gid).then(function (r) {
                    return r.json();
                }).then(function (r) {
                    this.loading=false;
                    if(r.success) {
                        this.ranks = r.data.data;
                        this.last=r.data.last;
                        this.total=r.data.total;


                    }
                });
            },
            myRank:function(){
                var self=this;
                this.loading=true;
                this.tab='my';
                if(!this.uid){
                    if(this.fb){
                        if(!FB.getUserID()){
                            FB.login(
                                function(response){
                                    if(response.status) {
                                        self.uid=FB.getUserID();
                                        self.myRank();
                                    }
                                }
                            );
                        }
                    }
                    return ;
                }
                this.error=0;
                this.$http.get(this.endpoint + '/me'  + '?gid=' + this.gid+'&uid='+this.uid).then(function (r) {
                    return r.json();
                }).then(function (r) {
                    if(r.success) {
                        this.ranks = r.data;
                        this.user=_.findWhere(this.ranks,{is_mine:true});
                    }else{
                        this.error=1;
                    }
                    this.loading=false;
                });
            }

        }
    })
})();