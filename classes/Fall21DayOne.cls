//ACCESS MODIFIERS
//Public, Private, and Global.
//Public --> Class variables and Methods are accessible via any other apex-class.
//Private --> Class variables and Methods are NOT accessible via any other apex-class.
//
//Global --> Class variables and Methods are accessible via any other class as well as
//			 accessible by the outside of the package(both Manage or Un-managed Packages).
Public class Fall21DayOne {
    //Declare the Variable.
	List<String> nameList;
    String searchNameStr;
    
    
    //Constructor. --> This is method, which runs First. --> its used to initialize the Variables.
    public Fall21DayOne(){//Contructor have the same name as the Class name.
        nameList = new List<String>();
        searchNameStr = 'Ayjemal';
        
        nameList.add('Anvar'); // --> INDEX [0]
        nameList.add('Alp Aslam');// --> INDEX [1]
        nameList.add('Ayjemal');// --> INDEX [2]
        nameList.add('Anna');// --> INDEX [3] ...
        nameList.add('Alp Aslam');
        nameList.add('Ayjemal');
        
        System.debug('DISPAY SIZE OF LIST: '+ nameList.size());
        
        for(String name :nameList){//name = nameList.get(0), nameList.get(1), ...
            //break; //Statement use to stop a list.
            //if(name == 'Ayjemal'){
            if(name == searchNameStr){
                System.debug('FOUND');
                break;
            }
        }

    }
}