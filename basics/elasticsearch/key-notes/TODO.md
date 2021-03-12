### Elasticsearch features to test

- `Index operations`
  - Create an index using custom mappings
  - Use index templates
  - Index documents to index

- `Shard allocation filtering`: https://www.elastic.co/guide/en/elasticsearch/reference/7.12/index-modules-allocation.html  
  - Try to allocate shards to specific nodes (hot/warm nodes)
  - Set `total shards per node` to limit number of primary shards of a specific index to be created on a specific node
  - Try `Data tier allocation`
