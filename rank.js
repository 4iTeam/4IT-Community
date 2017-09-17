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
            now:'',
            total:0,
            loading: !1,
            ranksUpdated:!1,
            top:50,
            tab:'top',
            m:0,
            mMin:0,
            fb:!1
        },
        mounted: function () {
            var action,m;
            if(action=$(this.$el).data('action')){
                this.action=action;
            }
            if(m=$(this.$el).data('m')){
                this.m=m;
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
                }else{
                    return 'No rank';
                }
            },
            prev:function () {
                if(this.loading){
                    return false;
                }
                if(this.mMin<0){
                    return this.m>this.mMin;
                }
                if(this.ranks&&this.ranks.length>0){
                    return true;
                }
                this.mMin=this.m+1;
                return false;
            },
            next:function(){
                if(this.loading){
                    return false;
                }
                return this.m<0;
            }

        },
        methods: {
            loadRank: function () {
                this.tab='top';
                this.loading=true;
                this.$http.get(this.endpoint + '/' + this.action + '?gid=' + this.gid+'&m='+this.m).then(function (r) {
                    return r.json();
                }).then(function (r) {
                    this.loading=false;
                    if(r.success) {
                        this.ranks = r.data.data||[];
                        this.last=r.data.last;
                        this.total=r.data.total;
                        this.now=r.data.now;
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
                this.$http.get(this.endpoint + '/me'  + '?gid=' + this.gid+'&uid='+this.uid+'&m='+this.m).then(function (r) {
                    return r.json();
                }).then(function (r) {
                    if(r.success) {
                        this.ranks = r.data.data||[];
                        this.now=r.data.now;
                        this.user=_.findWhere(this.ranks,{is_mine:true});
                    }else{
                        this.error=1;
                    }
                    this.loading=false;
                });
            },
            nextMonth:function(){
                this.m++;
                this.load();
            },
            prevMonth:function(){
                this.m--;
                this.load();
            },
            load:function(){
                if(this.tab=='top'){
                    this.loadRank();
                }
                if(this.tab=='my'){
                    this.myRank();
                }
            }

        }
    })
})();