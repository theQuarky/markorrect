import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  type: "service_account",
  projectId: "markorrect",
  private_key_id: "353c61c45a20548c4e521b0c0b971e1a00659b0b",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCku7SKEmyWrtWo\nZSFOFLDf0fnhV2c2foKhVw0LKCFPNCy3IJTOLZ+0y1dAd75vEAG4tQeuKRGfaVsn\na/ZBTdqvpcGyRQJ2BhWJSYI3bKJqWxzWbe5jOqTmO+6GNDpczrM8O9i7PgbxEVCe\nnxmYGb35KCSrJgpt9lEV3OGmcOgWU31mlxdd/ADmdmjOmOvzNvdwg+quXhqkAFy/\n7PsUGEBOY/sBRsqn9QeEHdihENkw+tsCNu+4VmAuOpFm+Lkh1mMm5QkDp4fULjrp\nyEmjqiyAxQmYg4LSqXW5qYyHNe8tPCSr7K282339ZmyUAqJrhcLTHFwEIjPhMeg6\nusZ/ajM7AgMBAAECggEACxkw6rsMnIu4MqBoeIUDWMRrJnWjPXQl0Qnk3yV7o+Ck\nE3GNbhwOErDRSPxoS5kcjJSK4CNPxJB3fezKgSJBlb6bf4aPt4cusYzOyiva//mD\n6xNO0aMP5gmiEBjDIiFrNqd0Hvno6D7C5MvJIt0AjTPZYbvuKKrXUhtmnVrcbcY/\nDCOEbapQynMaf30H6Dl44/3PPDiVbwfX5l4+7RUccAUhARZqYAac5Muq25MCgEIR\nqh7JDyGbu61lXY44n5fKCwPT3Vv4SgsG5G4Qof7DwnEGBX7XeA6asPetOCGft19N\noSxDfKBLZCUKVwx7+kMFFljo9sATFXZIRLwWrkiiMQKBgQDoXsVH1k9ewMqpxlAd\nBWXIPoLkkAYCpTIGyEDL9l0LbjHJyz1UvDMjFDAyH91vXZFXX7Frp5pyIj6unUiJ\nRP+m6yXbeNC6aWa9Pb2NCYIfsBlpuHoz2+i6MtyK/du75HPpJgcl7raGB+qwUGMc\nsViH5TMLWi0gP6l3lMzBAywIcQKBgQC1fCjt3yOG5eMeoHqSu0MLka3gYnKE7Y6/\nsXN2jGqBmp3qqZHfM90jmUW8tp/I+J1GDLjb1JQ4yEbzQs5yLVTvrkjPwP5B0YJB\nN/HX5QOMtcFzqAtfeBNwMMZ1xpiVJ2KGJer1eLQiqx/gSgC2AobjOf9FcaDIv5c1\nEKQWASNsawKBgAT+BD8G262tdq0vFYmKFCW5Mha3AWoNIoYCx2GaaWVVeLxdIXQw\nluiqBl8NUDSUTgsSgz1M3ISXN8GIn4ZTdSqg4q9UaSeYHBz0tp3RFnqXzfP3gqia\nkOVvMk3KJm5i+hqINp8aAdHfWatwDrEPHlfNFMuppE6ND5cCG2QKLWgBAoGAdu8w\nT3tNaAleB2M6ENECBiHpZkR+MlkQlNWxCn7JCbiPRwrrmu/9O2gmCJ9SJb2wLAkI\nWKB+ppuxy5f7fV3x7MU12FjtB6tKhn0oU8k0w1EVvzrggSdK7do5JVQKCK1v5uQQ\nj+AThSjKUg2NW7paNa17ekIWEZlleZQ3RGhok5MCgYEAg1xGG2gxxqn2KR8592M/\ngLF1UhM6QDCfHIcSZk+YtbggO2PBz2mV7nNbd2mD7qlI+0KuRNSDadZ8tQrWG0s8\nDCaDqnirwLnrPUvRoDNpaiQSwNj/Trmh5RNtwFuN8tWFoFbLMSGhWsQ/r2PM100D\n7lkDHLvDVi1WQZbzqNCLKoE=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-5ujww@markorrect.iam.gserviceaccount.com",
  client_id: "104806234947143572593",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5ujww%40markorrect.iam.gserviceaccount.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export default getFirestore(app);
