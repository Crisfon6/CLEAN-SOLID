(() => {
  // aplicando el principio de responsabilidad única
  // Priorizar la composicion frente la herencia

  type Gender = "M" | "F";

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
}
const settings = new Settings({
  lastOpenFolder: "/home",
  workingDirectory: "/usr/home",
});
  interface UserSettingsProps {
    workingDirectory: string,
    lastOpenFolder  : string,
    email: string,
    role: string,
    birthdate: Date;  
    gender: Gender,
    name: string,
}
  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({ 
        workingDirectory,
        lastOpenFolder,
        email,
        role,
        birthdate,
        gender,
        name, }: UserSettingsProps) {
      this.person = new Person({ name,gender,birthdate});
      this.user = new User({email,role});
      this.settings = new Settings({workingDirectory,lastOpenFolder});
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
console.log(userSettings.user.checkCredentials());
})();
