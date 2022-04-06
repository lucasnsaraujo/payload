import React from 'react';
import qs from 'qs';
import { useHistory } from 'react-router-dom';
import { useSearchParams } from '../../utilities/SearchParams';
import Popup from '../Popup';
import Chevron from '../../icons/Chevron';
import { defaults } from '../../../../collections/config/defaults';

import './index.scss';

const baseClass = 'per-page';

const defaultLimits = defaults.admin.pagination.limits;

type Props = {
  limits: number[]
  limit: number
  handleChange?: (limit: number) => void
  modifySearchParams?: boolean
}

const PerPage: React.FC<Props> = ({ limits = defaultLimits, limit, handleChange, modifySearchParams = true }) => {
  const params = useSearchParams();
  const history = useHistory();

  return (
    <div className={baseClass}>
      <Popup
        color="dark"
        horizontalAlign="right"
        button={(
          <strong>
            Per Page:
            {' '}
            {limit}
            <Chevron />
          </strong>
        )}
        render={({ close }) => (
          <div>
            <ul>
              {limits.map((limitNumber, i) => (
                <li
                  className={`${baseClass}-item`}
                  key={i}
                >
                  <button
                    type="button"
                    className={[
                      `${baseClass}__button`,
                      limitNumber === Number(limit) && `${baseClass}__button-active`,
                    ].filter(Boolean).join(' ')}
                    onClick={() => {
                      close();
                      if (handleChange) handleChange(limitNumber);
                      if (modifySearchParams) {
                        history.replace({
                          search: qs.stringify({
                            ...params,
                            limit: limitNumber,
                          }, { addQueryPrefix: true }),
                        });
                      }
                    }}
                  >
                    {limitNumber === Number(limit) && (
                      <Chevron />
                    )}
                    {limitNumber}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      />
    </div>
  );
};

export default PerPage;