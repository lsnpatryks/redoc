import { observer } from 'mobx-react';
import * as React from 'react';
import { OperationModel } from '../../services';

import { RightPanelHeader } from '../../common-elements';
import { l } from '../../services/Labels';

export interface OceanAllGrantsProps {
  operation: OperationModel;
}

@observer
export class OceanAllGrants extends React.Component<OceanAllGrantsProps> {
  render() {
    const { operation } = this.props;
    const grants = operation.oceanAllGrants;

    const hasGrants = grants.length > 0;
    return (
      (hasGrants && (
        <div>
          <RightPanelHeader> {l('oceanAllGrants')} </RightPanelHeader>
          {grants.map(sample => (
            <div key={sample}>{sample}</div>
          ))}
        </div>
      )) ||
      null
    );
  }
}
