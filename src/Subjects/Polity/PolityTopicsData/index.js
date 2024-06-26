import Fr from '../Fr';
import LegislationFindArticle from '../LegislationFindArticle';
import LegislationFindFromArticle from '../LegislationFindFromArticle';
import Parliament from '../Parliament';
import Executive from '../Executive';
import Judiciary from '../Judiciary';
import Elections from '../Elections';
import CSR from '../CSR';

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
	{
		topicId: 'executive',
		questions: Executive,
	},
	{
		topicId: 'judicary',
		questions: Judiciary,
	},
	{
		topicId: 'elections',
		questions: Elections,
	},
	{
		topicId: 'csr',
		questions: CSR,
	},
];

export default PolityTopicsData;

