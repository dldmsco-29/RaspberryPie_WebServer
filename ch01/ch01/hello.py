from flask import Flask
print("✅ Flask 코드 실행됨")   # 디버깅용 출력

app = Flask(__name__) 

@app.route('/')
def hello_world():
    print("👉 라우트 함수 호출됨")   # 요청 들어올 때마다 찍힘
    return 'Hello World!'

if __name__ == '__main__':
    app.run(host='0.0.0.0')

