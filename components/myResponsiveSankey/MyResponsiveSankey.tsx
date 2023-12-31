"use client"

import { ResponsiveSankey } from '@nivo/sankey';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export const MyResponsiveSankey = () => {

    const countMetrics = 3;
    const total = (countMetrics * 100);
    const pctMetrics = (total/countMetrics);
    const pct25 = (pctMetrics * 0.25);
    const pct50 = (pctMetrics * 0.50);

    const nodeIndex = {
        sourceNode: 'Findings',
        metric1: 'Reliability',
        metric2: 'Security',
        metric3: 'Maintainability',
        squadProspects: 'Prospects',
        squadSs1: 'SS1',
        squadSs2: 'SS2',
    }

    const data = {
        nodes: [
            { id: nodeIndex.sourceNode, nodeColor: "hsl(262, 70%, 50%)" },
            
            { id: nodeIndex.metric1, nodeColor: "hsl(295, 70%, 50%)" },
            { id: nodeIndex.metric2, nodeColor: "hsl(144, 70%, 50%)" },
            { id: nodeIndex.metric3, nodeColor: "hsl(151, 70%, 50%)" },
            
            { id: nodeIndex.squadProspects, nodeColor: "hsl(300, 70%, 50%)" },
            { id: nodeIndex.squadSs1, nodeColor: "hsl(133, 70%, 50%)" },
            { id: nodeIndex.squadSs2, nodeColor: "hsl(102, 70%, 50%)" },
        ],
        links: [
            { source: nodeIndex.sourceNode, target: nodeIndex.metric1, value: pctMetrics },
            { source: nodeIndex.sourceNode, target: nodeIndex.metric2, value: pctMetrics },
            { source: nodeIndex.sourceNode, target: nodeIndex.metric3, value: pctMetrics },
            
            { source: nodeIndex.metric1, target: nodeIndex.squadProspects, value: pct25 },
            { source: nodeIndex.metric1, target: nodeIndex.squadSs1, value: pct25 },
            { source: nodeIndex.metric1, target: nodeIndex.squadSs2, value: pct50 },

            { source: nodeIndex.metric2, target: nodeIndex.squadProspects, value: pct50 },
            { source: nodeIndex.metric2, target: nodeIndex.squadSs1, value: pct25 },
            { source: nodeIndex.metric2, target: nodeIndex.squadSs2, value: pct25 },

            { source: nodeIndex.metric3, target: nodeIndex.squadProspects, value: pct25 },
            { source: nodeIndex.metric3, target: nodeIndex.squadSs1, value: pct50 },
            { source: nodeIndex.metric3, target: nodeIndex.squadSs2, value: pct25 },
        ],
    };



      //console.log('data:', data);

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

