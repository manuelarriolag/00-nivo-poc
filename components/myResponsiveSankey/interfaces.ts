
export interface Data {
    nodes: Node[];
    links: Link[];
}

export interface Link {
    source: string;
    target: string;
    value:  number;
}

export interface Node {
    id:        string;
    nodeColor: string;
}
