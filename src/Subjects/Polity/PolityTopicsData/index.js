import Fr from '../Fr';
import LegislationFindArticle from '../LegislationFindArticle';
import LegislationFindFromArticle from '../LegislationFindFromArticle';
import Parliament from '../Parliament';

const PolityTopicsData = [
	{
		topicId: 'fr',
		questions: Fr,
	},
	{
		topicId: 'Legisalationfindarticle',

		questions: LegislationFindArticle,
	},
	{
		topicId: 'legisalationfindfromarticle',
		questions: LegislationFindFromArticle,
	},
	{
		topicId: 'parliament',
		questions: Parliament,
	},
];

export default PolityTopicsData;

