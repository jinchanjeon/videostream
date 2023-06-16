import requests,json

URL='http://220.81.195.15:8000/events'
#노트북 ip주소

def http_post_data(data):
    while True:
        api_data = {
	        'deviceId':1,
	        'event': data[0],
	        'description': data[1]
        }
        try:
            res=requests.post(URL, json=api_data)
            print(res.status_code)
            res_data = json.loads(res.text)
            print(res_data)
        except:
            print ("connection failed")
        break