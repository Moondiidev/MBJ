export class ProfessionalModel{
    constructor(
        public profession: string,
        public professionSkills: Array<string>,
        public fromYear: number,
        public toYear: number,
        public skills: Array<{name: string, experienceLevel: string}>,
        public educations: Array<{universityName: string, major: string, country: string, title: string, graduationYear: number}>,
        public certifications: Array<{country: string, giver: string, year: number}>
        ){}
}
