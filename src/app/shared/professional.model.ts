export class ProfessionalModel {
    constructor(
        public profession: string,
        public professionSkills:[{
            id: string,
            name: string
        }],
        public fromYear: number,
        public toYear: number,
        public skills: {
            data: Array<{ name: string, experienceLevel: string }>,
            sorter: Array<number>
        },
        public educations: {
            data: Array<{ universityName: string, major: string, country: string, title: string, graduationYear: number }>,
            sorter: Array<number>
        },
        public certifications: {
            data: Array<{ name: string, giver: string, year: number }>,
            sorter: Array<number>
        }
    ) { }
}
