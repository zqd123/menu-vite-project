import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
class RequestHttp {
  private instanceAxios: AxiosInstance = axios.create({});
  constructor() {
    this.instanceAxios.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        config.headers["token"] = "";
        return config;
      },
      (error: AxiosError) => {
        Promise.reject(error);
      }
    );
  }
}

export default new RequestHttp();
