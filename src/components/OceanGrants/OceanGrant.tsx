import { observer } from 'mobx-react';
import * as React from 'react';
import { LabelsConfig } from '../../services';

import { H3, TabPanel, Tabs } from '../../common-elements';
import { l } from '../../services/Labels';

export interface OceanGrantsProps {
  label: keyof LabelsConfig;
  grants: string[];
}

@observer
export class OceanGrant extends React.Component<OceanGrantsProps> {
  render() {
    const { label, grants } = this.props;
    const style = {
      padding: '5px',
      color: 'white',
      'word-wrap': 'break-word',
    };
    const hasGrants = grants.length > 0;

    return (
      (hasGrants && (
        <div>
          <H3> {l(label)} </H3>
          <Tabs defaultIndex={0}>
            <TabPanel>
              <div style={style}>
                <code>
                  <ul>
                    {grants.map(grant => (
                      <li key={grant}>{grant}</li>
                    ))}
                  </ul>
                </code>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      )) ||
      null
    );
  }
}
