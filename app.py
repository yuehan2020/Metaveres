from flask import Flask, request, render_template,jsonify

app = Flask(__name__,
static_folder='./dist',  #设置静态文件夹目录
template_folder = "./dist",
static_url_path=""
)

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html',name='index')

@app.route("/user/login", methods=['GET',"POST"])
def user_login():
    """
    用户登录
    :return:
    """
    data = request.get_json()
    userName = data.get("userName")
    password = data.get("password")
    if userName == "admin" and password == "123456":
        return jsonify({
            "code": 0,
            "data": {
                "token": "666666"
            }
        })
    else:
        return jsonify({
            "code": 99999999,
            "msg": "用户名或密码错误"
        })

@app.route("/user/info", methods=["GET", "POST"])
def user_info():
    """
    获取当前用户信息
    :return:
    """
    token = request.headers.get("token")
    if token == "666666":
        return jsonify({
            "code": 0,
            "data": {
                "id": "1",
                "userName": "小涵",
                "userType": 1
            }
        })
    return jsonify({
        "code": 99990403,
        "msg": "token不存在或已过期"
    })

if __name__ == '__main__':
    app.run()