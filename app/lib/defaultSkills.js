import { SiteConfig } from "./SiteConfig";

export const defaultSkills = [
    {
        id: 'default_skill_1',
        ['name']: 'Symfony',
        category: 'skill.cat_frameworks',
        learnedAt: '2022-03-01T00:00:00+00:00',
        logoPath: SiteConfig.API_URL + '/img/default_skills/symfony.png'
    },
    {
        id: 'default_skill_2',
        ['name']: 'React',
        category: 'skill.cat_frameworks',
        learnedAt: '2023-01-01T00:00:00+00:00',
        logoPath: SiteConfig.API_URL + '/img/default_skills/react.png'
    },
    {
        id: 'default_skill_3',
        ['name']: 'mySql',
        category: 'skill.cat_utils',
        learnedAt: '2021-09-00T00:00:00+00:00',
        logoPath: SiteConfig.API_URL + '/img/default_skills/mysql.png'
    },
    {
        id: 'default_skill_4',
        ['name']: 'PHP',
        category: 'skill.cat_languages',
        learnedAt: '2021-09-00T00:00:00+00:00',
        logoPath: SiteConfig.API_URL + '/img/default_skills/php.png'
    },
    {
        id: 'default_skill_5',
        ['name']: 'CSS',
        category: 'skill.cat_languages',
        learnedAt: '2021-07-00T00:00:00+00:00',
        logoPath: SiteConfig.API_URL + '/img/default_skills/css.png'
    }
];