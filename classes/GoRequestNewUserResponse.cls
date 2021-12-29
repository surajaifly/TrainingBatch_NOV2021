public class GoRequestNewUserResponse {
	public cls_meta meta;
	public cls_data data;
	class cls_meta {
	}
	public class cls_data {
		public Integer id;	//3704
		public String name;	//Tenali Ramakrishna
		public String email;	//test001@15ce.com
		public String gender;	//male
		public String status;	//active
	}
	public static GoRequestNewUserResponse parse(String json){
		return (GoRequestNewUserResponse) System.JSON.deserialize(json, GoRequestNewUserResponse.class);
	}
}