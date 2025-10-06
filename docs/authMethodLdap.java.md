# `authMethodLdap` Submodule <a name="`authMethodLdap` Submodule" id="@cdktf/provider-boundary.authMethodLdap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthMethodLdap <a name="AuthMethodLdap" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap boundary_auth_method_ldap}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.auth_method_ldap.AuthMethodLdap;

AuthMethodLdap.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .scopeId(java.lang.String)
//  .accountAttributeMaps(java.util.List<java.lang.String>)
//  .anonGroupSearch(java.lang.Boolean|IResolvable)
//  .bindDn(java.lang.String)
//  .bindPassword(java.lang.String)
//  .bindPasswordHmac(java.lang.String)
//  .certificates(java.util.List<java.lang.String>)
//  .clientCertificate(java.lang.String)
//  .clientCertificateKey(java.lang.String)
//  .clientCertificateKeyHmac(java.lang.String)
//  .dereferenceAliases(java.lang.String)
//  .description(java.lang.String)
//  .discoverDn(java.lang.Boolean|IResolvable)
//  .enableGroups(java.lang.Boolean|IResolvable)
//  .groupAttr(java.lang.String)
//  .groupDn(java.lang.String)
//  .groupFilter(java.lang.String)
//  .insecureTls(java.lang.Boolean|IResolvable)
//  .isPrimaryForScope(java.lang.Boolean|IResolvable)
//  .maximumPageSize(java.lang.Number)
//  .name(java.lang.String)
//  .startTls(java.lang.Boolean|IResolvable)
//  .state(java.lang.String)
//  .type(java.lang.String)
//  .upnDomain(java.lang.String)
//  .urls(java.util.List<java.lang.String>)
//  .userAttr(java.lang.String)
//  .userDn(java.lang.String)
//  .userFilter(java.lang.String)
//  .useTokenGroups(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The scope ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.accountAttributeMaps">accountAttributeMaps</a></code> | <code>java.util.List<java.lang.String></code> | Account attribute maps fullname and email. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.anonGroupSearch">anonGroupSearch</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use anon bind when performing LDAP group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.bindDn">bindDn</a></code> | <code>java.lang.String</code> | The distinguished name of entry to bind when performing user and group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.bindPassword">bindPassword</a></code> | <code>java.lang.String</code> | The password to use along with bind-dn performing user and group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.bindPasswordHmac">bindPasswordHmac</a></code> | <code>java.lang.String</code> | The HMAC of the bind password returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.certificates">certificates</a></code> | <code>java.util.List<java.lang.String></code> | PEM-encoded X.509 CA certificate in ASN.1 DER form that can be used as a trust anchor when connecting to an LDAP server(optional).  This may be specified multiple times. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | PEM-encoded X.509 client certificate in ASN.1 DER form that can be used to authenticate against an LDAP server(optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.clientCertificateKey">clientCertificateKey</a></code> | <code>java.lang.String</code> | PEM-encoded X.509 client certificate key in PKCS #8, ASN.1 DER form used with the client certificate (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.clientCertificateKeyHmac">clientCertificateKeyHmac</a></code> | <code>java.lang.String</code> | The HMAC of the client certificate key returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.dereferenceAliases">dereferenceAliases</a></code> | <code>java.lang.String</code> | Control how aliases are dereferenced when performing the search. Can be one of: NeverDerefAliases, DerefInSearching, DerefFindingBaseObj, and DerefAlways (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The auth method description. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.discoverDn">discoverDn</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use anon bind to discover the bind DN of a user (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.enableGroups">enableGroups</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Find the authenticated user's groups during authentication (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.groupAttr">groupAttr</a></code> | <code>java.lang.String</code> | The attribute that enumerates a user's group membership from entries returned by a group search (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.groupDn">groupDn</a></code> | <code>java.lang.String</code> | The base DN under which to perform group search. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.groupFilter">groupFilter</a></code> | <code>java.lang.String</code> | A go template used to construct a LDAP group search filter (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Skip the LDAP server SSL certificate validation (optional) - insecure and use with caution. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.isPrimaryForScope">isPrimaryForScope</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | When true, makes this auth method the primary auth method for the scope in which it resides. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.maximumPageSize">maximumPageSize</a></code> | <code>java.lang.Number</code> | MaximumPageSize specifies a maximum search result size to use when retrieving the authenticated user's groups (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The auth method name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.startTls">startTls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Issue StartTLS command after connecting (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Can be one of 'inactive', 'active-private', or 'active-public'. Defaults to active-public. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of auth method; hardcoded. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.upnDomain">upnDomain</a></code> | <code>java.lang.String</code> | The userPrincipalDomain used to construct the UPN string for the authenticating user (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.urls">urls</a></code> | <code>java.util.List<java.lang.String></code> | The LDAP URLs that specify LDAP servers to connect to (required).  May be specified multiple times. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.userAttr">userAttr</a></code> | <code>java.lang.String</code> | The attribute on user entry matching the username passed when authenticating (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.userDn">userDn</a></code> | <code>java.lang.String</code> | The base DN under which to perform user search (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.userFilter">userFilter</a></code> | <code>java.lang.String</code> | A go template used to construct a LDAP user search filter (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.useTokenGroups">useTokenGroups</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use the Active Directory tokenGroups constructed attribute of the user to find the group memberships (optional). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.scopeId"></a>

- *Type:* java.lang.String

The scope ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#scope_id AuthMethodLdap#scope_id}

---

##### `accountAttributeMaps`<sup>Optional</sup> <a name="accountAttributeMaps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.accountAttributeMaps"></a>

- *Type:* java.util.List<java.lang.String>

Account attribute maps fullname and email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#account_attribute_maps AuthMethodLdap#account_attribute_maps}

---

##### `anonGroupSearch`<sup>Optional</sup> <a name="anonGroupSearch" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.anonGroupSearch"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use anon bind when performing LDAP group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#anon_group_search AuthMethodLdap#anon_group_search}

---

##### `bindDn`<sup>Optional</sup> <a name="bindDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.bindDn"></a>

- *Type:* java.lang.String

The distinguished name of entry to bind when performing user and group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#bind_dn AuthMethodLdap#bind_dn}

---

##### `bindPassword`<sup>Optional</sup> <a name="bindPassword" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.bindPassword"></a>

- *Type:* java.lang.String

The password to use along with bind-dn performing user and group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#bind_password AuthMethodLdap#bind_password}

---

##### `bindPasswordHmac`<sup>Optional</sup> <a name="bindPasswordHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.bindPasswordHmac"></a>

- *Type:* java.lang.String

The HMAC of the bind password returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#bind_password_hmac AuthMethodLdap#bind_password_hmac}

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.certificates"></a>

- *Type:* java.util.List<java.lang.String>

PEM-encoded X.509 CA certificate in ASN.1 DER form that can be used as a trust anchor when connecting to an LDAP server(optional).  This may be specified multiple times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#certificates AuthMethodLdap#certificates}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.clientCertificate"></a>

- *Type:* java.lang.String

PEM-encoded X.509 client certificate in ASN.1 DER form that can be used to authenticate against an LDAP server(optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#client_certificate AuthMethodLdap#client_certificate}

---

##### `clientCertificateKey`<sup>Optional</sup> <a name="clientCertificateKey" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.clientCertificateKey"></a>

- *Type:* java.lang.String

PEM-encoded X.509 client certificate key in PKCS #8, ASN.1 DER form used with the client certificate (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#client_certificate_key AuthMethodLdap#client_certificate_key}

---

##### `clientCertificateKeyHmac`<sup>Optional</sup> <a name="clientCertificateKeyHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.clientCertificateKeyHmac"></a>

- *Type:* java.lang.String

The HMAC of the client certificate key returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#client_certificate_key_hmac AuthMethodLdap#client_certificate_key_hmac}

---

##### `dereferenceAliases`<sup>Optional</sup> <a name="dereferenceAliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.dereferenceAliases"></a>

- *Type:* java.lang.String

Control how aliases are dereferenced when performing the search. Can be one of: NeverDerefAliases, DerefInSearching, DerefFindingBaseObj, and DerefAlways (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#dereference_aliases AuthMethodLdap#dereference_aliases}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The auth method description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#description AuthMethodLdap#description}

---

##### `discoverDn`<sup>Optional</sup> <a name="discoverDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.discoverDn"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use anon bind to discover the bind DN of a user (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#discover_dn AuthMethodLdap#discover_dn}

---

##### `enableGroups`<sup>Optional</sup> <a name="enableGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.enableGroups"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Find the authenticated user's groups during authentication (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#enable_groups AuthMethodLdap#enable_groups}

---

##### `groupAttr`<sup>Optional</sup> <a name="groupAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.groupAttr"></a>

- *Type:* java.lang.String

The attribute that enumerates a user's group membership from entries returned by a group search (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#group_attr AuthMethodLdap#group_attr}

---

##### `groupDn`<sup>Optional</sup> <a name="groupDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.groupDn"></a>

- *Type:* java.lang.String

The base DN under which to perform group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#group_dn AuthMethodLdap#group_dn}

---

##### `groupFilter`<sup>Optional</sup> <a name="groupFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.groupFilter"></a>

- *Type:* java.lang.String

A go template used to construct a LDAP group search filter (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#group_filter AuthMethodLdap#group_filter}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.insecureTls"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Skip the LDAP server SSL certificate validation (optional) - insecure and use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#insecure_tls AuthMethodLdap#insecure_tls}

---

##### `isPrimaryForScope`<sup>Optional</sup> <a name="isPrimaryForScope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.isPrimaryForScope"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

When true, makes this auth method the primary auth method for the scope in which it resides.

The primary auth method for a scope means the the user will be automatically created when they login using an LDAP account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#is_primary_for_scope AuthMethodLdap#is_primary_for_scope}

---

##### `maximumPageSize`<sup>Optional</sup> <a name="maximumPageSize" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.maximumPageSize"></a>

- *Type:* java.lang.Number

MaximumPageSize specifies a maximum search result size to use when retrieving the authenticated user's groups (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#maximum_page_size AuthMethodLdap#maximum_page_size}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The auth method name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#name AuthMethodLdap#name}

---

##### `startTls`<sup>Optional</sup> <a name="startTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.startTls"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Issue StartTLS command after connecting (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#start_tls AuthMethodLdap#start_tls}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Can be one of 'inactive', 'active-private', or 'active-public'. Defaults to active-public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#state AuthMethodLdap#state}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of auth method; hardcoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#type AuthMethodLdap#type}

---

##### `upnDomain`<sup>Optional</sup> <a name="upnDomain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.upnDomain"></a>

- *Type:* java.lang.String

The userPrincipalDomain used to construct the UPN string for the authenticating user (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#upn_domain AuthMethodLdap#upn_domain}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.urls"></a>

- *Type:* java.util.List<java.lang.String>

The LDAP URLs that specify LDAP servers to connect to (required).  May be specified multiple times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#urls AuthMethodLdap#urls}

---

##### `userAttr`<sup>Optional</sup> <a name="userAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.userAttr"></a>

- *Type:* java.lang.String

The attribute on user entry matching the username passed when authenticating (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#user_attr AuthMethodLdap#user_attr}

---

##### `userDn`<sup>Optional</sup> <a name="userDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.userDn"></a>

- *Type:* java.lang.String

The base DN under which to perform user search (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#user_dn AuthMethodLdap#user_dn}

---

##### `userFilter`<sup>Optional</sup> <a name="userFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.userFilter"></a>

- *Type:* java.lang.String

A go template used to construct a LDAP user search filter (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#user_filter AuthMethodLdap#user_filter}

---

##### `useTokenGroups`<sup>Optional</sup> <a name="useTokenGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.useTokenGroups"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use the Active Directory tokenGroups constructed attribute of the user to find the group memberships (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#use_token_groups AuthMethodLdap#use_token_groups}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAccountAttributeMaps">resetAccountAttributeMaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAnonGroupSearch">resetAnonGroupSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindDn">resetBindDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPassword">resetBindPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPasswordHmac">resetBindPasswordHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetCertificates">resetCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKey">resetClientCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKeyHmac">resetClientCertificateKeyHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDereferenceAliases">resetDereferenceAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDiscoverDn">resetDiscoverDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetEnableGroups">resetEnableGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupAttr">resetGroupAttr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupDn">resetGroupDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupFilter">resetGroupFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetIsPrimaryForScope">resetIsPrimaryForScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetMaximumPageSize">resetMaximumPageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetStartTls">resetStartTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUpnDomain">resetUpnDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUrls">resetUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserAttr">resetUserAttr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserDn">resetUserDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserFilter">resetUserFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUseTokenGroups">resetUseTokenGroups</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountAttributeMaps` <a name="resetAccountAttributeMaps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAccountAttributeMaps"></a>

```java
public void resetAccountAttributeMaps()
```

##### `resetAnonGroupSearch` <a name="resetAnonGroupSearch" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAnonGroupSearch"></a>

```java
public void resetAnonGroupSearch()
```

##### `resetBindDn` <a name="resetBindDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindDn"></a>

```java
public void resetBindDn()
```

##### `resetBindPassword` <a name="resetBindPassword" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPassword"></a>

```java
public void resetBindPassword()
```

##### `resetBindPasswordHmac` <a name="resetBindPasswordHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPasswordHmac"></a>

```java
public void resetBindPasswordHmac()
```

##### `resetCertificates` <a name="resetCertificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetCertificates"></a>

```java
public void resetCertificates()
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetClientCertificateKey` <a name="resetClientCertificateKey" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKey"></a>

```java
public void resetClientCertificateKey()
```

##### `resetClientCertificateKeyHmac` <a name="resetClientCertificateKeyHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKeyHmac"></a>

```java
public void resetClientCertificateKeyHmac()
```

##### `resetDereferenceAliases` <a name="resetDereferenceAliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDereferenceAliases"></a>

```java
public void resetDereferenceAliases()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDiscoverDn` <a name="resetDiscoverDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDiscoverDn"></a>

```java
public void resetDiscoverDn()
```

##### `resetEnableGroups` <a name="resetEnableGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetEnableGroups"></a>

```java
public void resetEnableGroups()
```

##### `resetGroupAttr` <a name="resetGroupAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupAttr"></a>

```java
public void resetGroupAttr()
```

##### `resetGroupDn` <a name="resetGroupDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupDn"></a>

```java
public void resetGroupDn()
```

##### `resetGroupFilter` <a name="resetGroupFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupFilter"></a>

```java
public void resetGroupFilter()
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetInsecureTls"></a>

```java
public void resetInsecureTls()
```

##### `resetIsPrimaryForScope` <a name="resetIsPrimaryForScope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetIsPrimaryForScope"></a>

```java
public void resetIsPrimaryForScope()
```

##### `resetMaximumPageSize` <a name="resetMaximumPageSize" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetMaximumPageSize"></a>

```java
public void resetMaximumPageSize()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetName"></a>

```java
public void resetName()
```

##### `resetStartTls` <a name="resetStartTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetStartTls"></a>

```java
public void resetStartTls()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetState"></a>

```java
public void resetState()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetType"></a>

```java
public void resetType()
```

##### `resetUpnDomain` <a name="resetUpnDomain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUpnDomain"></a>

```java
public void resetUpnDomain()
```

##### `resetUrls` <a name="resetUrls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUrls"></a>

```java
public void resetUrls()
```

##### `resetUserAttr` <a name="resetUserAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserAttr"></a>

```java
public void resetUserAttr()
```

##### `resetUserDn` <a name="resetUserDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserDn"></a>

```java
public void resetUserDn()
```

##### `resetUserFilter` <a name="resetUserFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserFilter"></a>

```java
public void resetUserFilter()
```

##### `resetUseTokenGroups` <a name="resetUseTokenGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUseTokenGroups"></a>

```java
public void resetUseTokenGroups()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AuthMethodLdap resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.boundary.auth_method_ldap.AuthMethodLdap;

AuthMethodLdap.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.boundary.auth_method_ldap.AuthMethodLdap;

AuthMethodLdap.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.boundary.auth_method_ldap.AuthMethodLdap;

AuthMethodLdap.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.boundary.auth_method_ldap.AuthMethodLdap;

AuthMethodLdap.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AuthMethodLdap.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AuthMethodLdap resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AuthMethodLdap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AuthMethodLdap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AuthMethodLdap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMapsInput">accountAttributeMapsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearchInput">anonGroupSearchInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDnInput">bindDnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmacInput">bindPasswordHmacInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordInput">bindPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificatesInput">certificatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateInput">clientCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmacInput">clientCertificateKeyHmacInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyInput">clientCertificateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliasesInput">dereferenceAliasesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDnInput">discoverDnInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroupsInput">enableGroupsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttrInput">groupAttrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDnInput">groupDnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilterInput">groupFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTlsInput">insecureTlsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScopeInput">isPrimaryForScopeInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSizeInput">maximumPageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeIdInput">scopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTlsInput">startTlsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomainInput">upnDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urlsInput">urlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttrInput">userAttrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDnInput">userDnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilterInput">userFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroupsInput">useTokenGroupsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMaps">accountAttributeMaps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearch">anonGroupSearch</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDn">bindDn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPassword">bindPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmac">bindPasswordHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificates">certificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKey">clientCertificateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmac">clientCertificateKeyHmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliases">dereferenceAliases</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDn">discoverDn</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroups">enableGroups</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttr">groupAttr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDn">groupDn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilter">groupFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScope">isPrimaryForScope</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSize">maximumPageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTls">startTls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomain">upnDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urls">urls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttr">userAttr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDn">userDn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilter">userFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroups">useTokenGroups</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `accountAttributeMapsInput`<sup>Optional</sup> <a name="accountAttributeMapsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMapsInput"></a>

```java
public java.util.List<java.lang.String> getAccountAttributeMapsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anonGroupSearchInput`<sup>Optional</sup> <a name="anonGroupSearchInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearchInput"></a>

```java
public java.lang.Boolean|IResolvable getAnonGroupSearchInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `bindDnInput`<sup>Optional</sup> <a name="bindDnInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDnInput"></a>

```java
public java.lang.String getBindDnInput();
```

- *Type:* java.lang.String

---

##### `bindPasswordHmacInput`<sup>Optional</sup> <a name="bindPasswordHmacInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmacInput"></a>

```java
public java.lang.String getBindPasswordHmacInput();
```

- *Type:* java.lang.String

---

##### `bindPasswordInput`<sup>Optional</sup> <a name="bindPasswordInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordInput"></a>

```java
public java.lang.String getBindPasswordInput();
```

- *Type:* java.lang.String

---

##### `certificatesInput`<sup>Optional</sup> <a name="certificatesInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificatesInput"></a>

```java
public java.util.List<java.lang.String> getCertificatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateInput"></a>

```java
public java.lang.String getClientCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateKeyHmacInput`<sup>Optional</sup> <a name="clientCertificateKeyHmacInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmacInput"></a>

```java
public java.lang.String getClientCertificateKeyHmacInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateKeyInput`<sup>Optional</sup> <a name="clientCertificateKeyInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyInput"></a>

```java
public java.lang.String getClientCertificateKeyInput();
```

- *Type:* java.lang.String

---

##### `dereferenceAliasesInput`<sup>Optional</sup> <a name="dereferenceAliasesInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliasesInput"></a>

```java
public java.lang.String getDereferenceAliasesInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `discoverDnInput`<sup>Optional</sup> <a name="discoverDnInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDnInput"></a>

```java
public java.lang.Boolean|IResolvable getDiscoverDnInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableGroupsInput`<sup>Optional</sup> <a name="enableGroupsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroupsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableGroupsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `groupAttrInput`<sup>Optional</sup> <a name="groupAttrInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttrInput"></a>

```java
public java.lang.String getGroupAttrInput();
```

- *Type:* java.lang.String

---

##### `groupDnInput`<sup>Optional</sup> <a name="groupDnInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDnInput"></a>

```java
public java.lang.String getGroupDnInput();
```

- *Type:* java.lang.String

---

##### `groupFilterInput`<sup>Optional</sup> <a name="groupFilterInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilterInput"></a>

```java
public java.lang.String getGroupFilterInput();
```

- *Type:* java.lang.String

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTlsInput"></a>

```java
public java.lang.Boolean|IResolvable getInsecureTlsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isPrimaryForScopeInput`<sup>Optional</sup> <a name="isPrimaryForScopeInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScopeInput"></a>

```java
public java.lang.Boolean|IResolvable getIsPrimaryForScopeInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `maximumPageSizeInput`<sup>Optional</sup> <a name="maximumPageSizeInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSizeInput"></a>

```java
public java.lang.Number getMaximumPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeIdInput"></a>

```java
public java.lang.String getScopeIdInput();
```

- *Type:* java.lang.String

---

##### `startTlsInput`<sup>Optional</sup> <a name="startTlsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTlsInput"></a>

```java
public java.lang.Boolean|IResolvable getStartTlsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `upnDomainInput`<sup>Optional</sup> <a name="upnDomainInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomainInput"></a>

```java
public java.lang.String getUpnDomainInput();
```

- *Type:* java.lang.String

---

##### `urlsInput`<sup>Optional</sup> <a name="urlsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urlsInput"></a>

```java
public java.util.List<java.lang.String> getUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userAttrInput`<sup>Optional</sup> <a name="userAttrInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttrInput"></a>

```java
public java.lang.String getUserAttrInput();
```

- *Type:* java.lang.String

---

##### `userDnInput`<sup>Optional</sup> <a name="userDnInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDnInput"></a>

```java
public java.lang.String getUserDnInput();
```

- *Type:* java.lang.String

---

##### `userFilterInput`<sup>Optional</sup> <a name="userFilterInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilterInput"></a>

```java
public java.lang.String getUserFilterInput();
```

- *Type:* java.lang.String

---

##### `useTokenGroupsInput`<sup>Optional</sup> <a name="useTokenGroupsInput" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroupsInput"></a>

```java
public java.lang.Boolean|IResolvable getUseTokenGroupsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `accountAttributeMaps`<sup>Required</sup> <a name="accountAttributeMaps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMaps"></a>

```java
public java.util.List<java.lang.String> getAccountAttributeMaps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anonGroupSearch`<sup>Required</sup> <a name="anonGroupSearch" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearch"></a>

```java
public java.lang.Boolean|IResolvable getAnonGroupSearch();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `bindDn`<sup>Required</sup> <a name="bindDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDn"></a>

```java
public java.lang.String getBindDn();
```

- *Type:* java.lang.String

---

##### `bindPassword`<sup>Required</sup> <a name="bindPassword" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPassword"></a>

```java
public java.lang.String getBindPassword();
```

- *Type:* java.lang.String

---

##### `bindPasswordHmac`<sup>Required</sup> <a name="bindPasswordHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmac"></a>

```java
public java.lang.String getBindPasswordHmac();
```

- *Type:* java.lang.String

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificates"></a>

```java
public java.util.List<java.lang.String> getCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientCertificateKey`<sup>Required</sup> <a name="clientCertificateKey" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKey"></a>

```java
public java.lang.String getClientCertificateKey();
```

- *Type:* java.lang.String

---

##### `clientCertificateKeyHmac`<sup>Required</sup> <a name="clientCertificateKeyHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmac"></a>

```java
public java.lang.String getClientCertificateKeyHmac();
```

- *Type:* java.lang.String

---

##### `dereferenceAliases`<sup>Required</sup> <a name="dereferenceAliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliases"></a>

```java
public java.lang.String getDereferenceAliases();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `discoverDn`<sup>Required</sup> <a name="discoverDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDn"></a>

```java
public java.lang.Boolean|IResolvable getDiscoverDn();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableGroups`<sup>Required</sup> <a name="enableGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroups"></a>

```java
public java.lang.Boolean|IResolvable getEnableGroups();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `groupAttr`<sup>Required</sup> <a name="groupAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttr"></a>

```java
public java.lang.String getGroupAttr();
```

- *Type:* java.lang.String

---

##### `groupDn`<sup>Required</sup> <a name="groupDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDn"></a>

```java
public java.lang.String getGroupDn();
```

- *Type:* java.lang.String

---

##### `groupFilter`<sup>Required</sup> <a name="groupFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilter"></a>

```java
public java.lang.String getGroupFilter();
```

- *Type:* java.lang.String

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTls"></a>

```java
public java.lang.Boolean|IResolvable getInsecureTls();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isPrimaryForScope`<sup>Required</sup> <a name="isPrimaryForScope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScope"></a>

```java
public java.lang.Boolean|IResolvable getIsPrimaryForScope();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `maximumPageSize`<sup>Required</sup> <a name="maximumPageSize" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSize"></a>

```java
public java.lang.Number getMaximumPageSize();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

---

##### `startTls`<sup>Required</sup> <a name="startTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTls"></a>

```java
public java.lang.Boolean|IResolvable getStartTls();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `upnDomain`<sup>Required</sup> <a name="upnDomain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomain"></a>

```java
public java.lang.String getUpnDomain();
```

- *Type:* java.lang.String

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urls"></a>

```java
public java.util.List<java.lang.String> getUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userAttr`<sup>Required</sup> <a name="userAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttr"></a>

```java
public java.lang.String getUserAttr();
```

- *Type:* java.lang.String

---

##### `userDn`<sup>Required</sup> <a name="userDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDn"></a>

```java
public java.lang.String getUserDn();
```

- *Type:* java.lang.String

---

##### `userFilter`<sup>Required</sup> <a name="userFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilter"></a>

```java
public java.lang.String getUserFilter();
```

- *Type:* java.lang.String

---

##### `useTokenGroups`<sup>Required</sup> <a name="useTokenGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroups"></a>

```java
public java.lang.Boolean|IResolvable getUseTokenGroups();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AuthMethodLdapConfig <a name="AuthMethodLdapConfig" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.boundary.auth_method_ldap.AuthMethodLdapConfig;

AuthMethodLdapConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .scopeId(java.lang.String)
//  .accountAttributeMaps(java.util.List<java.lang.String>)
//  .anonGroupSearch(java.lang.Boolean|IResolvable)
//  .bindDn(java.lang.String)
//  .bindPassword(java.lang.String)
//  .bindPasswordHmac(java.lang.String)
//  .certificates(java.util.List<java.lang.String>)
//  .clientCertificate(java.lang.String)
//  .clientCertificateKey(java.lang.String)
//  .clientCertificateKeyHmac(java.lang.String)
//  .dereferenceAliases(java.lang.String)
//  .description(java.lang.String)
//  .discoverDn(java.lang.Boolean|IResolvable)
//  .enableGroups(java.lang.Boolean|IResolvable)
//  .groupAttr(java.lang.String)
//  .groupDn(java.lang.String)
//  .groupFilter(java.lang.String)
//  .insecureTls(java.lang.Boolean|IResolvable)
//  .isPrimaryForScope(java.lang.Boolean|IResolvable)
//  .maximumPageSize(java.lang.Number)
//  .name(java.lang.String)
//  .startTls(java.lang.Boolean|IResolvable)
//  .state(java.lang.String)
//  .type(java.lang.String)
//  .upnDomain(java.lang.String)
//  .urls(java.util.List<java.lang.String>)
//  .userAttr(java.lang.String)
//  .userDn(java.lang.String)
//  .userFilter(java.lang.String)
//  .useTokenGroups(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.scopeId">scopeId</a></code> | <code>java.lang.String</code> | The scope ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.accountAttributeMaps">accountAttributeMaps</a></code> | <code>java.util.List<java.lang.String></code> | Account attribute maps fullname and email. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.anonGroupSearch">anonGroupSearch</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use anon bind when performing LDAP group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindDn">bindDn</a></code> | <code>java.lang.String</code> | The distinguished name of entry to bind when performing user and group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPassword">bindPassword</a></code> | <code>java.lang.String</code> | The password to use along with bind-dn performing user and group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPasswordHmac">bindPasswordHmac</a></code> | <code>java.lang.String</code> | The HMAC of the bind password returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.certificates">certificates</a></code> | <code>java.util.List<java.lang.String></code> | PEM-encoded X.509 CA certificate in ASN.1 DER form that can be used as a trust anchor when connecting to an LDAP server(optional).  This may be specified multiple times. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | PEM-encoded X.509 client certificate in ASN.1 DER form that can be used to authenticate against an LDAP server(optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKey">clientCertificateKey</a></code> | <code>java.lang.String</code> | PEM-encoded X.509 client certificate key in PKCS #8, ASN.1 DER form used with the client certificate (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKeyHmac">clientCertificateKeyHmac</a></code> | <code>java.lang.String</code> | The HMAC of the client certificate key returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dereferenceAliases">dereferenceAliases</a></code> | <code>java.lang.String</code> | Control how aliases are dereferenced when performing the search. Can be one of: NeverDerefAliases, DerefInSearching, DerefFindingBaseObj, and DerefAlways (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.description">description</a></code> | <code>java.lang.String</code> | The auth method description. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.discoverDn">discoverDn</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use anon bind to discover the bind DN of a user (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.enableGroups">enableGroups</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Find the authenticated user's groups during authentication (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupAttr">groupAttr</a></code> | <code>java.lang.String</code> | The attribute that enumerates a user's group membership from entries returned by a group search (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupDn">groupDn</a></code> | <code>java.lang.String</code> | The base DN under which to perform group search. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupFilter">groupFilter</a></code> | <code>java.lang.String</code> | A go template used to construct a LDAP group search filter (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Skip the LDAP server SSL certificate validation (optional) - insecure and use with caution. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.isPrimaryForScope">isPrimaryForScope</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | When true, makes this auth method the primary auth method for the scope in which it resides. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.maximumPageSize">maximumPageSize</a></code> | <code>java.lang.Number</code> | MaximumPageSize specifies a maximum search result size to use when retrieving the authenticated user's groups (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.name">name</a></code> | <code>java.lang.String</code> | The auth method name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.startTls">startTls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Issue StartTLS command after connecting (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.state">state</a></code> | <code>java.lang.String</code> | Can be one of 'inactive', 'active-private', or 'active-public'. Defaults to active-public. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of auth method; hardcoded. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.upnDomain">upnDomain</a></code> | <code>java.lang.String</code> | The userPrincipalDomain used to construct the UPN string for the authenticating user (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.urls">urls</a></code> | <code>java.util.List<java.lang.String></code> | The LDAP URLs that specify LDAP servers to connect to (required).  May be specified multiple times. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userAttr">userAttr</a></code> | <code>java.lang.String</code> | The attribute on user entry matching the username passed when authenticating (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userDn">userDn</a></code> | <code>java.lang.String</code> | The base DN under which to perform user search (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userFilter">userFilter</a></code> | <code>java.lang.String</code> | A go template used to construct a LDAP user search filter (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.useTokenGroups">useTokenGroups</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Use the Active Directory tokenGroups constructed attribute of the user to find the group memberships (optional). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.scopeId"></a>

```java
public java.lang.String getScopeId();
```

- *Type:* java.lang.String

The scope ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#scope_id AuthMethodLdap#scope_id}

---

##### `accountAttributeMaps`<sup>Optional</sup> <a name="accountAttributeMaps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.accountAttributeMaps"></a>

```java
public java.util.List<java.lang.String> getAccountAttributeMaps();
```

- *Type:* java.util.List<java.lang.String>

Account attribute maps fullname and email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#account_attribute_maps AuthMethodLdap#account_attribute_maps}

---

##### `anonGroupSearch`<sup>Optional</sup> <a name="anonGroupSearch" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.anonGroupSearch"></a>

```java
public java.lang.Boolean|IResolvable getAnonGroupSearch();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use anon bind when performing LDAP group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#anon_group_search AuthMethodLdap#anon_group_search}

---

##### `bindDn`<sup>Optional</sup> <a name="bindDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindDn"></a>

```java
public java.lang.String getBindDn();
```

- *Type:* java.lang.String

The distinguished name of entry to bind when performing user and group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#bind_dn AuthMethodLdap#bind_dn}

---

##### `bindPassword`<sup>Optional</sup> <a name="bindPassword" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPassword"></a>

```java
public java.lang.String getBindPassword();
```

- *Type:* java.lang.String

The password to use along with bind-dn performing user and group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#bind_password AuthMethodLdap#bind_password}

---

##### `bindPasswordHmac`<sup>Optional</sup> <a name="bindPasswordHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPasswordHmac"></a>

```java
public java.lang.String getBindPasswordHmac();
```

- *Type:* java.lang.String

The HMAC of the bind password returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#bind_password_hmac AuthMethodLdap#bind_password_hmac}

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.certificates"></a>

```java
public java.util.List<java.lang.String> getCertificates();
```

- *Type:* java.util.List<java.lang.String>

PEM-encoded X.509 CA certificate in ASN.1 DER form that can be used as a trust anchor when connecting to an LDAP server(optional).  This may be specified multiple times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#certificates AuthMethodLdap#certificates}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

PEM-encoded X.509 client certificate in ASN.1 DER form that can be used to authenticate against an LDAP server(optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#client_certificate AuthMethodLdap#client_certificate}

---

##### `clientCertificateKey`<sup>Optional</sup> <a name="clientCertificateKey" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKey"></a>

```java
public java.lang.String getClientCertificateKey();
```

- *Type:* java.lang.String

PEM-encoded X.509 client certificate key in PKCS #8, ASN.1 DER form used with the client certificate (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#client_certificate_key AuthMethodLdap#client_certificate_key}

---

##### `clientCertificateKeyHmac`<sup>Optional</sup> <a name="clientCertificateKeyHmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKeyHmac"></a>

```java
public java.lang.String getClientCertificateKeyHmac();
```

- *Type:* java.lang.String

The HMAC of the client certificate key returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#client_certificate_key_hmac AuthMethodLdap#client_certificate_key_hmac}

---

##### `dereferenceAliases`<sup>Optional</sup> <a name="dereferenceAliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dereferenceAliases"></a>

```java
public java.lang.String getDereferenceAliases();
```

- *Type:* java.lang.String

Control how aliases are dereferenced when performing the search. Can be one of: NeverDerefAliases, DerefInSearching, DerefFindingBaseObj, and DerefAlways (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#dereference_aliases AuthMethodLdap#dereference_aliases}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The auth method description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#description AuthMethodLdap#description}

---

##### `discoverDn`<sup>Optional</sup> <a name="discoverDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.discoverDn"></a>

```java
public java.lang.Boolean|IResolvable getDiscoverDn();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use anon bind to discover the bind DN of a user (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#discover_dn AuthMethodLdap#discover_dn}

---

##### `enableGroups`<sup>Optional</sup> <a name="enableGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.enableGroups"></a>

```java
public java.lang.Boolean|IResolvable getEnableGroups();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Find the authenticated user's groups during authentication (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#enable_groups AuthMethodLdap#enable_groups}

---

##### `groupAttr`<sup>Optional</sup> <a name="groupAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupAttr"></a>

```java
public java.lang.String getGroupAttr();
```

- *Type:* java.lang.String

The attribute that enumerates a user's group membership from entries returned by a group search (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#group_attr AuthMethodLdap#group_attr}

---

##### `groupDn`<sup>Optional</sup> <a name="groupDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupDn"></a>

```java
public java.lang.String getGroupDn();
```

- *Type:* java.lang.String

The base DN under which to perform group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#group_dn AuthMethodLdap#group_dn}

---

##### `groupFilter`<sup>Optional</sup> <a name="groupFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupFilter"></a>

```java
public java.lang.String getGroupFilter();
```

- *Type:* java.lang.String

A go template used to construct a LDAP group search filter (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#group_filter AuthMethodLdap#group_filter}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.insecureTls"></a>

```java
public java.lang.Boolean|IResolvable getInsecureTls();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Skip the LDAP server SSL certificate validation (optional) - insecure and use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#insecure_tls AuthMethodLdap#insecure_tls}

---

##### `isPrimaryForScope`<sup>Optional</sup> <a name="isPrimaryForScope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.isPrimaryForScope"></a>

```java
public java.lang.Boolean|IResolvable getIsPrimaryForScope();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

When true, makes this auth method the primary auth method for the scope in which it resides.

The primary auth method for a scope means the the user will be automatically created when they login using an LDAP account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#is_primary_for_scope AuthMethodLdap#is_primary_for_scope}

---

##### `maximumPageSize`<sup>Optional</sup> <a name="maximumPageSize" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.maximumPageSize"></a>

```java
public java.lang.Number getMaximumPageSize();
```

- *Type:* java.lang.Number

MaximumPageSize specifies a maximum search result size to use when retrieving the authenticated user's groups (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#maximum_page_size AuthMethodLdap#maximum_page_size}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The auth method name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#name AuthMethodLdap#name}

---

##### `startTls`<sup>Optional</sup> <a name="startTls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.startTls"></a>

```java
public java.lang.Boolean|IResolvable getStartTls();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Issue StartTLS command after connecting (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#start_tls AuthMethodLdap#start_tls}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Can be one of 'inactive', 'active-private', or 'active-public'. Defaults to active-public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#state AuthMethodLdap#state}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of auth method; hardcoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#type AuthMethodLdap#type}

---

##### `upnDomain`<sup>Optional</sup> <a name="upnDomain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.upnDomain"></a>

```java
public java.lang.String getUpnDomain();
```

- *Type:* java.lang.String

The userPrincipalDomain used to construct the UPN string for the authenticating user (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#upn_domain AuthMethodLdap#upn_domain}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.urls"></a>

```java
public java.util.List<java.lang.String> getUrls();
```

- *Type:* java.util.List<java.lang.String>

The LDAP URLs that specify LDAP servers to connect to (required).  May be specified multiple times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#urls AuthMethodLdap#urls}

---

##### `userAttr`<sup>Optional</sup> <a name="userAttr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userAttr"></a>

```java
public java.lang.String getUserAttr();
```

- *Type:* java.lang.String

The attribute on user entry matching the username passed when authenticating (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#user_attr AuthMethodLdap#user_attr}

---

##### `userDn`<sup>Optional</sup> <a name="userDn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userDn"></a>

```java
public java.lang.String getUserDn();
```

- *Type:* java.lang.String

The base DN under which to perform user search (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#user_dn AuthMethodLdap#user_dn}

---

##### `userFilter`<sup>Optional</sup> <a name="userFilter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userFilter"></a>

```java
public java.lang.String getUserFilter();
```

- *Type:* java.lang.String

A go template used to construct a LDAP user search filter (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#user_filter AuthMethodLdap#user_filter}

---

##### `useTokenGroups`<sup>Optional</sup> <a name="useTokenGroups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.useTokenGroups"></a>

```java
public java.lang.Boolean|IResolvable getUseTokenGroups();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Use the Active Directory tokenGroups constructed attribute of the user to find the group memberships (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/auth_method_ldap#use_token_groups AuthMethodLdap#use_token_groups}

---



