(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M'|'F';
    interface PersonProps {
        birthdate: Date;  
        gender: Gender,
        name: string,
    }
    class Person {
        public birthdate : Date;
        public gender: Gender;
        public name :string;
        constructor(
            {name, 
            gender, 
            birthdate}:PersonProps){
                this.name =name;
                this.gender = gender;
                this.birthdate = birthdate;
            }
    }

    interface UserProps{
        email: string,
        role: string,
        birthdate: Date;  
        gender: Gender,
        name: string,
    }
    class User extends Person {
        
        public lastAccess: Date;
        public email: string;
        public role: string;
        constructor(
        {   email,
            role ,
            birthdate,
            gender,
            name}: UserProps
        ) {
            super( {birthdate, gender, name} );
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }
    
    interface UserSettingsProps {
        workingDirectory: string,
        lastOpenFolder  : string,
        email: string,
        role: string,
        birthdate: Date;  
        gender: Gender,
        name: string,
    }

    class UserSettings extends User {
        public workingDirectory:string;
        public lastOpenFolder: string;
        constructor(
            {workingDirectory,
            lastOpenFolder  ,
            email,
            role,
            birthdate,
            gender,
            name,   } : UserSettingsProps
        ) {
            super({email,
                role,                
                birthdate,
                gender,
                name });
                this.workingDirectory = workingDirectory;
                this.lastOpenFolder = lastOpenFolder;
        }
    }


    const userSettings = new UserSettings(
        {
            workingDirectory: '/usr/home',
            lastOpenFolder:'/home',
            email: 'fernando@google.com',
            role: 'Admin',
            name:'Fernando',
            gender: 'M',
            birthdate: new Date('1985-10-21')});
    
    console.log({ userSettings });
    console.log(userSettings.checkCredentials());

})();