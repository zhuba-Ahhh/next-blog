import { uuid } from '@/utils';
import { dictums as defalutDictums, dictumsType } from './data/dictum';

const DictumList = (props: { origin?: string; dictums?: dictumsType; onClick?: () => void }) => {
  const {
    origin = `烽火戏诸侯《剑来》`,
    dictums = defalutDictums,
  } = props;

  return (
    <div className="grid gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
      {dictums.map((dictum, index) => (
        <div key={`${uuid()}-${index}`} data-swapy-slot={index} className="h-full cursor-pointer">
          <div
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2 hover:scale-102"
            data-swapy-item={dictum}
          >
            <p className="text-xl font-medium text-gray-800 leading-relaxed mb-4 line-clamp-5">
              {typeof dictum === 'string' ? dictum : dictum.dictum}
            </p>
            <p className="text-right text-gray-500 text-sm italic">
              —— {typeof dictum === 'string' ? origin : dictum.origin || '佚名'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DictumList;
