import { observer } from 'mobx-react';
import * as React from 'react';
import { OperationModel } from '../../services';

import { RightPanelHeader } from '../../common-elements';
import { l } from '../../services/Labels';

export interface OceanGrantsProps {
  operation: OperationModel;
}

@observer
export class OceanAnyGrant extends React.Component<OceanGrantsProps> {
  render() {
    const { operation } = this.props;
    const grants = operation.oceanAnyGrant;

    const hasGrants = grants.length > 0;
    return (
      (hasGrants && (
        <div>
          <RightPanelHeader> {l('oceanAnyGrant')} </RightPanelHeader>
          {grants.map(sample => (
            <div key={sample}>{sample}</div>
          ))}
        </div>
      )) ||
      null
    );
  }
}
