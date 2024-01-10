"use client"

import { ResponsiveSankey } from '@nivo/sankey';
import { Domain, Metric, Squad } from './interfaces';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export const MyResponsiveSankey = () => {

    const countMetrics = 8;
    const total = (countMetrics * 100);
    const pctMetrics = (total/countMetrics);
    const pct25 = (pctMetrics * 0.25);
    const pct50 = (pctMetrics * 0.50);

    const data = {
        nodes: [
            { id: Domain.Complexity,         nodeColor: "hsl(295, 70%, 50%)" },
            { id: Domain.Coverage,           nodeColor: "hsl(144, 70%, 50%)" },
            { id: Domain.Duplications,       nodeColor: "hsl(151, 70%, 50%)" },
            { id: Domain.Issues,             nodeColor: "hsl(295, 70%, 50%)" },
            { id: Domain.Maintainability,    nodeColor: "hsl(300, 70%, 50%)" },
            { id: Domain.Reliability,        nodeColor: "hsl(173, 70%, 50%)" },
            { id: Domain.Security,           nodeColor: "hsl(220, 70%, 50%)" },
            { id: Domain.SecurityReview,     nodeColor: "hsl(180, 70%, 50%)" },
            { id: Squad.Empty,               nodeColor: "hsl(180, 70%, 50%)" },
            { id: Squad.Disbursement,        nodeColor: "hsl(180, 70%, 50%)" },
            { id: Squad.Gip,                 nodeColor: "hsl(180, 70%, 50%)" },
            { id: Squad.Martech,             nodeColor: "hsl(180, 70%, 50%)" },
            { id: Squad.Offers1,             nodeColor: "hsl(180, 70%, 50%)" },
            { id: Squad.Offers2,             nodeColor: "hsl(180, 70%, 50%)" },
            { id: Squad.PersonInput,         nodeColor: "hsl(180, 70%, 50%)" },
            { id: Squad.Prospects,           nodeColor: "hsl(180, 70%, 50%)" },
            { id: Squad.SquadsDeExperiencia, nodeColor: "hsl(180, 70%, 50%)" },
            { id: Squad.Ss1,                 nodeColor: "hsl(180, 70%, 50%)" },
            { id: Squad.Ss2,                 nodeColor: "hsl(180, 70%, 50%)" },
            { id: Squad.Use,                 nodeColor: "hsl(180, 70%, 50%)" },
        ],
        links: [
            { target: Domain.Complexity,        source: Squad.Empty,                value: 1 },
            
            { target: Domain.Coverage,          source: Squad.Disbursement,         value: 1 },
            
            { target: Domain.Duplications,      source: Squad.Gip,                  value: 1 },
            
            { target: Domain.Issues,            source: Squad.Martech,              value: 1 },
            
            { target: Domain.Maintainability,   source: Squad.Offers1,              value: 1 },
            
            { target: Domain.Reliability,       source: Squad.Offers2,              value: 1 },
            
            { target: Domain.Security,          source: Squad.PersonInput,          value: 1 },
            
        ],
    };



    return (
        <ResponsiveSankey
            data={data}
            margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
            align="justify"
            colors={{ scheme: 'category10' }}
            nodeOpacity={1}
            nodeHoverOthersOpacity={0.35}
            nodeThickness={18}
            nodeSpacing={24}
            nodeBorderWidth={0}
            nodeBorderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.8
                    ]
                ]
            }}
            nodeBorderRadius={3}
            linkOpacity={0.5}
            linkHoverOthersOpacity={0.1}
            linkContract={3}
            enableLinkGradient={true}
            labelPosition="outside"
            labelOrientation="vertical"
            labelPadding={16}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1
                    ]
                ]
            }}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 130,
                    itemWidth: 100,
                    itemHeight: 14,
                    itemDirection: 'right-to-left',
                    itemsSpacing: 2,
                    itemTextColor: '#999',
                    symbolSize: 14,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

