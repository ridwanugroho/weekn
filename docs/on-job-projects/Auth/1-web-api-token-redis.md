
# Storing Web API client auth token in Redis

![alt text](<Api client auth with redis.jpg>)

Many web api use Bearer token as their credential to a or some api endpoints. The request to generate token can be done in itself, or by other identity provider. But, the point that want we explain in this section is how we ask for token, and use it effectively. 

In my case, i use separate token generator (let say Keycloak 😄) than an endpoint in the api. Usually auth token generator endpoint provided by api it self as separate endpoint or sometime as new application. Due to security reason, generated token has limited valid time, usually in minutes. Once the token expired or invalid, targeted api will give Http response code 401 - Unauthorized, the api client should re-generate token then. Here is the basic approach :

1. Client request token
2. Client hit api and bring the generated token as credential
3. Api give responses
4. If token invalid, request token again

Above sequence don’t store the token. Client always request token everytime it will hit the api. This method isn’t wrong, but inefective because the round trip when requesting token is costly. Instead of requesting token every request, i try to store it on Redis. Why redis? Why not host/server memory cache or database? Since modern app already dockerized running, the memorry rely on its replica. Once an app replicate, the new replica memory will not same as before. Storing temporary data in databse is also inefective i think, because you have to maintain expired data too. Redis will fit the requiremnt of “temporary” and persistence between replicas. The point is :

- Request the token
- Identify the token expire time
- Add token to Redis with expiration = token expiration - n, where n is some number of minutes that you thik save as gap between token expiration and redis expiration. Make sure the redis is invalid before token expiration to prevent you app access the expired token.
- Once redis invalid, request new token, store again using same criteria mentioned before