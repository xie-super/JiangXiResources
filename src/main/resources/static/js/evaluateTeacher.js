
layui.use(['rate'], function () {
    var rate = layui.rate;

    rate.render({
        elem: '#test1'
        , value: 4
        , text: true
        ,length:4
        ,half:false
        ,theme:'#6E3A17'
        , setText: function (value) { //自定义文本的回调
            var arrs = {
                '1': '较差'
                , '2': '及格'
                , '3': '较好'
                , '4': '极好'

            };
            this.span.text(arrs[value] || (value + "星"));
        }
    })
    rate.render({
        elem: '#test2'
        , value: 4
        , text: true
        ,length:4
        ,half:false
        ,theme:'#6E3A17'
        , setText: function (value) { //自定义文本的回调
            var arrs = {
                '1': '较差'
                , '2': '及格'
                , '3': '较好'
                , '4': '极好'

            };
            this.span.text(arrs[value] || (value + "星"));
        }
    })
    rate.render({
        elem: '#test3'
        , value: 4
        , text: true
        ,length:4
        ,half:false
        ,theme:'#6E3A17'
        , setText: function (value) { //自定义文本的回调
            var arrs = {
                '1': '较差'
                , '2': '及格'
                , '3': '较好'
                , '4': '极好'

            };
            this.span.text(arrs[value] || (value + "星"));
        }
    })
    rate.render({
        elem: '#test4'
        , value: 4
        , text: true
        ,length:4
        ,half:false
        ,theme:'#6E3A17'
        , setText: function (value) { //自定义文本的回调
            var arrs = {
                '1': '较差'
                , '2': '及格'
                , '3': '较好'
                , '4': '极好'

            };
            this.span.text(arrs[value] || (value + "星"));
        }
    })
    //自定义文本
    rate.render({
        elem: '#test5'
        , value: 4
        , text: true
        ,length:4
        ,half:false
        ,theme:'#6E3A17'
        , setText: function (value) { //自定义文本的回调
            var arrs = {
                '1': '较差'
                , '2': '及格'
                , '3': '较好'
                , '4': '极好'

            };
            this.span.text(arrs[value] || (value + "星"));
        }
    })
    rate.render({
        elem: '#test6'
        , value: 4
        , text: true
        ,length:4
        ,half:false
        ,theme:'#6E3A17'
        , setText: function (value) { //自定义文本的回调
            var arrs = {
                '1': '较差'
                , '2': '及格'
                , '3': '较好'
                , '4': '极好'

            };
            this.span.text(arrs[value] || (value + "星"));
        }
    })
    rate.render({
        elem: '#test7'
        , value: 4
        , text: true
        ,length:4
        ,half:false
        ,theme:'#6E3A17'
        , setText: function (value) { //自定义文本的回调
            var arrs = {
                '1': '较差'
                , '2': '及格'
                , '3': '较好'
                , '4': '极好'

            };
            this.span.text(arrs[value] || (value + "星"));
        }
    })
    rate.render({
        elem: '#test8'
        , value: 4
        , text: true
        ,length:4
        ,half:false
        ,theme:'#6E3A17'
        , setText: function (value) { //自定义文本的回调
            var arrs = {
                '1': '较差'
                , '2': '及格'
                , '3': '较好'
                , '4': '极好'

            };
            this.span.text(arrs[value] || (value + "星"));
        }
    })
    rate.render({
        elem: '#test9'
        , value: 4
        , text: true
        ,length:4
        ,half:false
        ,theme:'#6E3A17'
        , setText: function (value) { //自定义文本的回调
            var arrs = {
                '1': '较差'
                , '2': '及格'
                , '3': '较好'
                , '4': '极好'

            };
            this.span.text(arrs[value] || (value + "星"));
        }
    })
    rate.render({
        elem: '#test10'
        , value: 4
        , text: true
        ,length:4
        ,half:false
        ,theme:'#6E3A17'
        , setText: function (value) { //自定义文本的回调
            var arrs = {
                '1': '较差'
                , '2': '及格'
                , '3': '较好'
                , '4': '极好'

            };
            this.span.text(arrs[value] || (value + "星"));
        }
    })

});

