export const calculateAge = (dateOfBirth: string): number => {
    const todayDate = new Date();
    const todayDay = todayDate.getDate();
    const todayMonth = todayDate.getMonth();
    const todayYear = todayDate.getFullYear();

    const birthDate = new Date(dateOfBirth);
    const birthDay = birthDate.getDate();
    const birthMonth = birthDate.getMonth();
    const birthYear = birthDate.getFullYear();

    const age = todayYear - birthYear;

    if (todayMonth > birthMonth || (todayMonth === birthMonth && todayDay >= birthDay)) return age;
    else return age - 1;
};
