import { observer } from 'mobx-react';
import * as React from 'react';
import { OperationModel } from '../../services';

import { RightPanelHeader, TabPanel, Tabs } from '../../common-elements';
import { l } from '../../services/Labels';

export interface OceanAnyGrantsProps {
  operation: OperationModel;
}

@observer
export class OceanAnyGrant extends React.Component<OceanAnyGrantsProps> {
  render() {
    const { operation } = this.props;
    const grants = operation.oceanAnyGrant;
    const style = { padding: '10px' };
    const hasGrants = grants.length > 0;

    return (
      (hasGrants && (
        <div>
          <RightPanelHeader> {l('oceanAnyGrant')} </RightPanelHeader>
          <Tabs defaultIndex={0}>
            <TabPanel>
              {grants.map(grant => (
                <div style={style} key={grant}>
                  <code>{grant}</code>
                </div>
              ))}
            </TabPanel>
          </Tabs>
        </div>
      )) ||
      null
    );
  }
}
