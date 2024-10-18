import { observer } from 'mobx-react';
import * as React from 'react';
import { LabelsConfig } from '../../services';
import {
  GrantHeader,
  GrantHeaderColumn,
  SecuritiesColumn,
  Wrap,
} from '../SecurityRequirement/styled.elements';
import { l } from '../../services/Labels';
import { StyledMarkdownBlock } from '../Markdown/styled.elements';
import { ExampleValue } from '../../common-elements/fields';

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
        <Wrap $expanded={false}>
          <GrantHeaderColumn>
            <GrantHeader>{l(label)}</GrantHeader>
          </GrantHeaderColumn>
          <SecuritiesColumn>
            <div style={{ wordWrap: 'break-word' }}>
              {grants.map(grant => (
                <StyledMarkdownBlock key={grant}>
                  <ExampleValue>{grant}</ExampleValue>
                </StyledMarkdownBlock>
              ))}
            </div>
          </SecuritiesColumn>
        </Wrap>
      )) ||
      null
    );
  }
}
