## Key notes:

### Cluster basics

- An elasticsearch index is a logical grouping of one or more physical shards.
- Each shard is a self contained index.
- By distributing the documents in an index across multiple shards and distributing those shards across multiple nodes, elasticsearch can ensure redundancy and increases query capacity as nodes are added to the cluster.
- When nodes are added or removed from the cluster, elasticsearch automatically migrates shards to rebalance the cluster.

### Shard Types

- Primary Shards 
    - Each document in an index belongs to one primary shard.
    - The number of primary shards is fixed at the time index is created.
- Replica Shards
    - A replica shard is a copy of primary shard. 
    - Having more replica shards can increase search speed but can also increase disk usage.
    - Replica shards can be changed at any time without interrupting indexing or query operations.
    
