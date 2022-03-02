import { environment } from 'src/environments/environment';

export class ApiConfig {
  public static baseApiUrl = environment.baseApiUrl;
  public static auth = environment.baseApiUrl + '/auth';
  public static login = ApiConfig.auth + '/signin';
  public static refreshToken = ApiConfig.auth + '/refresh-token';
  public static baseApiEndPoint = environment.baseApiUrl + '/v1';
  public static imageUrl = environment.baseApiUrl;
}
