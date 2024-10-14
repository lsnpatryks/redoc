import { observer } from 'mobx-react';
import * as React from 'react';
import { LabelsConfig } from '../../services';
import {
  AuthHeader,
  AuthHeaderColumn,
  SecuritiesColumn,
  Wrap,
} from '../SecurityRequirement/styled.elements';
import { l } from '../../services/Labels';

export interface OceanGrantsProps {
  label: keyof LabelsConfig;
  grants: string[];
}

@observer
export class OceanGrant extends React.Component<OceanGrantsProps> {
  render() {
    const { label, grants } = this.props;
    return (
      (grants.length > 0 && (
        // <div>
        //   <H3> {l(label)} </H3>
        //   <Tabs defaultIndex={0}>
        //     <TabPanel>
        //       <div style={style}>
        //         <code>
        //           <ul>
        //             {grants.map(grant => (
        //               <li key={grant}>{grant}</li>
        //             ))}
        //           </ul>
        //         </code>
        //       </div>
        //     </TabPanel>
        //   </Tabs>
        // </div>
        <Wrap $expanded={false}>
          <AuthHeaderColumn>
            <AuthHeader>{l(label)}</AuthHeader>
          </AuthHeaderColumn>
          <SecuritiesColumn>
            <div style={{ wordWrap: 'break-word' }}>
              <ul style={{ padding: 0, margin: 0 }}>
                {grants.map(grant => (
                  <li style={{ fontFamily: 'monospace' }} key={grant}>
                    {grant}
                  </li>
                ))}
              </ul>
            </div>
          </SecuritiesColumn>
        </Wrap>
      )) ||
      null
    );
  }
}
