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
    
### Performance Considerations

- Elasticsearch performance depends on shard size and number of primary shards:
    - The more shards, the more overhead to maintain indices.
    - If the shard size is large, it takes longer to move data around during rebalancing.
    - Querying lots of small shards makes the processing per shard faster, but more queries means more overhead.
    - Querying a small number of larger shards might be faster.
    - As a starting point, we should try to keep average shard size between a few GBs and a few tens of GB. 
    - For time based data, it is common to see shards in the 20GB to 40GB range.
    - The number of shards per GB of heap space should be less than 20.
    
Reference: Go through the presentation at https://www.elastic.co/elasticon/conf/2016/sf/quantitative-cluster-sizing
    
### Running docker inside a docker container

- I will be using hadolint as dockerfile linter which will recommend me to follow best practices.
