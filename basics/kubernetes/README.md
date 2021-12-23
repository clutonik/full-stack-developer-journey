# Kubernetes

## POD Definition (YAML)

```
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
  labels:
    app: my-app
    env: production
spec:
  containers:
  - name: my-container
    image: busybox
    command:
    - sleep
    - "3600"
```

- The fields in the YAML are listed below and are mandatory:
  - `apiVersion`: The version of the kubernetes API.
  - `kind`: The type of the resource. e.g. `Pod`
  - `metadata`: Metadata about the resource.
  - `spec`: The specification of the resource. e.g. `containers`

### API Versions and Kinds

- `Pod`: `v1`
- `Service`: `v1`
- `Deployment`: `/apps/v1`
- `ReplicaSet`: `/apps/v1`
