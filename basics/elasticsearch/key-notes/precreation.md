## Things to understand before creating an index

#### Index static settings

There are few settings for an elasticsearch index which can only be defined during index creation time. I will try to document only the most common settings:

- `index.number_of_shards` : This setting controls number of primary shards for an index. This setting can not be changed on a closed index. There is a safety limit on the number of shards you can specify for an index i.e. 1024 but this can be changed by specifying `"-Des.index.max_number_of_shards=n"` JVM property, where 'n' is the number of primary shards you want to allow for an index.

- `index.number_of_routing_shards`: This setting controls the number of routing shards used to split an index. TODO: Understand this by testing split index functionality.

#### Index dynamic settings

- `index.number_of_replicas`
- ``
