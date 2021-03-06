layui.use(['layer', 'element', 'form', 'layedit'], function() {
    var layer = layui.layer;
    var form = layui.form;
    var element = layui.element;
    var layedit = layui.layedit;
    $(function() {
        $("#butt").click(function() {
            layer.open({
                type: 1,
                title: "注册页面",
                area: ['600px', '700px'],
                offset: '20px',
                content: $("#gb"),
                cancel: function() {
                    // 你点击右上角 X 取消后要做什么
                    setTimeout('window.location.reload()', 1);
                },
                success: function() {
                    form.on('submit(formDemo)', function(data) {

                    });
                }
            })
            form.render();
        })

        //验证输入的密码是否相同；
        $("#pass2").blur(function() {
            var pass1 = $("#pass1").val();
            var pass2 = $("#pass2").val();
            if(pass1 != pass2) {
                layer.msg("两次输入的密码不一致", {
                    "icon": 2,
                    "time": 2000
                });
                $("#pass2").val("");
                return false;
            }
            return true;
        });
    });
    //创建一个编辑器
    var editIndex = layedit.build('LAY_demo_editor');
    //自定义验证规则
    form.verify({
        title: function(value) {
            if(value.length < 5) {
                return '标题至少得5个字符啊';
            }
        },
        pwd: [
            /^(\w){6,20}$/, '只能输入6-20个字母、数字、下划线'
        ],
        emails: [
            /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/, '请输入正确的邮箱格式：<br>如：xxx@qq.com<br>xxx@163.com等格式'
        ],
        phones: [
            /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/, '您的输入有误，请重新输入(中国11位手机号)'
        ],
        truename: [
            /^[\u4e00-\u9fa5]{2,4}$/, '您的输入有误，请输入2-4位中文'
        ],
        cardId: [
            /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, '请输入正确的身份证号'
        ],
        content: function(value) {
            layedit.sync(editIndex);
        }
    });
});