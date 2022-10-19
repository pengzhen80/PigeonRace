from django_redis import get_redis_connection # django-redis使用原生連線

class Redis_Client():
    def __init__(self):
        cacheCon = get_redis_connection("default") # 指向setting的CACHES > testRedis
        # print(cacheCon)
        # cacheCon.set('hello', '1')
        value = cacheCon.get('hello')
        print(value)



