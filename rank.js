/* Developed by Nguyen Thanh | Copyright (C) 2017 4IT */
(function () {
    new Vue({
        el: "#ranking",
        data: {
            endpoint: "https://4it.top/api/v1/rank",
            ranks: [],
            uid: '',
            gid: '1415192401896193',
            error: !1,
            last:'',
            total:0,
            loading: !1
        },
        mounted: function () {
            this.loadRank();

        },
        methods: {
            loadRank: function () {
                this.$http.get(this.endpoint + '/top' + '?gid=' + this.gid).then(function (r) {
                    return r.json();
                }).then(function (r) {
                    if(r.success) {
                        this.ranks = r.data.data;
                        this.last=r.data.last;
                        this.total=r.data.total;
                    }
                });
            },
            onSubmit: function () {

            }

        }
    })
})();