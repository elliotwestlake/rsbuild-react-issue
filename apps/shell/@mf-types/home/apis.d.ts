
    export type RemoteKeys = 'home/app';
    type PackageType<T> = T extends 'home/app' ? typeof import('home/app') :any;