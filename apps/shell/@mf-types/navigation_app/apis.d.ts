
    export type RemoteKeys = 'navigation_app/app';
    type PackageType<T> = T extends 'navigation_app/app' ? typeof import('navigation_app/app') :any;