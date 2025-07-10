# `authMethodLdap` Submodule <a name="`authMethodLdap` Submodule" id="@cdktf/provider-boundary.authMethodLdap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthMethodLdap <a name="AuthMethodLdap" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap boundary_auth_method_ldap}.

#### Initializers <a name="Initializers" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method_ldap

authMethodLdap.AuthMethodLdap(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scope_id: str,
  account_attribute_maps: typing.List[str] = None,
  anon_group_search: typing.Union[bool, IResolvable] = None,
  bind_dn: str = None,
  bind_password: str = None,
  bind_password_hmac: str = None,
  certificates: typing.List[str] = None,
  client_certificate: str = None,
  client_certificate_key: str = None,
  client_certificate_key_hmac: str = None,
  dereference_aliases: str = None,
  description: str = None,
  discover_dn: typing.Union[bool, IResolvable] = None,
  enable_groups: typing.Union[bool, IResolvable] = None,
  group_attr: str = None,
  group_dn: str = None,
  group_filter: str = None,
  insecure_tls: typing.Union[bool, IResolvable] = None,
  is_primary_for_scope: typing.Union[bool, IResolvable] = None,
  maximum_page_size: typing.Union[int, float] = None,
  name: str = None,
  start_tls: typing.Union[bool, IResolvable] = None,
  state: str = None,
  type: str = None,
  upn_domain: str = None,
  urls: typing.List[str] = None,
  user_attr: str = None,
  user_dn: str = None,
  user_filter: str = None,
  use_token_groups: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.scopeId">scope_id</a></code> | <code>str</code> | The scope ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.accountAttributeMaps">account_attribute_maps</a></code> | <code>typing.List[str]</code> | Account attribute maps fullname and email. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.anonGroupSearch">anon_group_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use anon bind when performing LDAP group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.bindDn">bind_dn</a></code> | <code>str</code> | The distinguished name of entry to bind when performing user and group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.bindPassword">bind_password</a></code> | <code>str</code> | The password to use along with bind-dn performing user and group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.bindPasswordHmac">bind_password_hmac</a></code> | <code>str</code> | The HMAC of the bind password returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.certificates">certificates</a></code> | <code>typing.List[str]</code> | PEM-encoded X.509 CA certificate in ASN.1 DER form that can be used as a trust anchor when connecting to an LDAP server(optional).  This may be specified multiple times. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.clientCertificate">client_certificate</a></code> | <code>str</code> | PEM-encoded X.509 client certificate in ASN.1 DER form that can be used to authenticate against an LDAP server(optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.clientCertificateKey">client_certificate_key</a></code> | <code>str</code> | PEM-encoded X.509 client certificate key in PKCS #8, ASN.1 DER form used with the client certificate (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.clientCertificateKeyHmac">client_certificate_key_hmac</a></code> | <code>str</code> | The HMAC of the client certificate key returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.dereferenceAliases">dereference_aliases</a></code> | <code>str</code> | Control how aliases are dereferenced when performing the search. Can be one of: NeverDerefAliases, DerefInSearching, DerefFindingBaseObj, and DerefAlways (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.description">description</a></code> | <code>str</code> | The auth method description. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.discoverDn">discover_dn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use anon bind to discover the bind DN of a user (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.enableGroups">enable_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Find the authenticated user's groups during authentication (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.groupAttr">group_attr</a></code> | <code>str</code> | The attribute that enumerates a user's group membership from entries returned by a group search (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.groupDn">group_dn</a></code> | <code>str</code> | The base DN under which to perform group search. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.groupFilter">group_filter</a></code> | <code>str</code> | A go template used to construct a LDAP group search filter (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip the LDAP server SSL certificate validation (optional) - insecure and use with caution. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.isPrimaryForScope">is_primary_for_scope</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, makes this auth method the primary auth method for the scope in which it resides. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.maximumPageSize">maximum_page_size</a></code> | <code>typing.Union[int, float]</code> | MaximumPageSize specifies a maximum search result size to use when retrieving the authenticated user's groups (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.name">name</a></code> | <code>str</code> | The auth method name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.startTls">start_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Issue StartTLS command after connecting (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.state">state</a></code> | <code>str</code> | Can be one of 'inactive', 'active-private', or 'active-public'. Defaults to active-public. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of auth method; hardcoded. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.upnDomain">upn_domain</a></code> | <code>str</code> | The userPrincipalDomain used to construct the UPN string for the authenticating user (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.urls">urls</a></code> | <code>typing.List[str]</code> | The LDAP URLs that specify LDAP servers to connect to (required).  May be specified multiple times. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.userAttr">user_attr</a></code> | <code>str</code> | The attribute on user entry matching the username passed when authenticating (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.userDn">user_dn</a></code> | <code>str</code> | The base DN under which to perform user search (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.userFilter">user_filter</a></code> | <code>str</code> | A go template used to construct a LDAP user search filter (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.useTokenGroups">use_token_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use the Active Directory tokenGroups constructed attribute of the user to find the group memberships (optional). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.scopeId"></a>

- *Type:* str

The scope ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#scope_id AuthMethodLdap#scope_id}

---

##### `account_attribute_maps`<sup>Optional</sup> <a name="account_attribute_maps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.accountAttributeMaps"></a>

- *Type:* typing.List[str]

Account attribute maps fullname and email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#account_attribute_maps AuthMethodLdap#account_attribute_maps}

---

##### `anon_group_search`<sup>Optional</sup> <a name="anon_group_search" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.anonGroupSearch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use anon bind when performing LDAP group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#anon_group_search AuthMethodLdap#anon_group_search}

---

##### `bind_dn`<sup>Optional</sup> <a name="bind_dn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.bindDn"></a>

- *Type:* str

The distinguished name of entry to bind when performing user and group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#bind_dn AuthMethodLdap#bind_dn}

---

##### `bind_password`<sup>Optional</sup> <a name="bind_password" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.bindPassword"></a>

- *Type:* str

The password to use along with bind-dn performing user and group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#bind_password AuthMethodLdap#bind_password}

---

##### `bind_password_hmac`<sup>Optional</sup> <a name="bind_password_hmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.bindPasswordHmac"></a>

- *Type:* str

The HMAC of the bind password returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#bind_password_hmac AuthMethodLdap#bind_password_hmac}

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.certificates"></a>

- *Type:* typing.List[str]

PEM-encoded X.509 CA certificate in ASN.1 DER form that can be used as a trust anchor when connecting to an LDAP server(optional).  This may be specified multiple times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#certificates AuthMethodLdap#certificates}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.clientCertificate"></a>

- *Type:* str

PEM-encoded X.509 client certificate in ASN.1 DER form that can be used to authenticate against an LDAP server(optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#client_certificate AuthMethodLdap#client_certificate}

---

##### `client_certificate_key`<sup>Optional</sup> <a name="client_certificate_key" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.clientCertificateKey"></a>

- *Type:* str

PEM-encoded X.509 client certificate key in PKCS #8, ASN.1 DER form used with the client certificate (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#client_certificate_key AuthMethodLdap#client_certificate_key}

---

##### `client_certificate_key_hmac`<sup>Optional</sup> <a name="client_certificate_key_hmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.clientCertificateKeyHmac"></a>

- *Type:* str

The HMAC of the client certificate key returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#client_certificate_key_hmac AuthMethodLdap#client_certificate_key_hmac}

---

##### `dereference_aliases`<sup>Optional</sup> <a name="dereference_aliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.dereferenceAliases"></a>

- *Type:* str

Control how aliases are dereferenced when performing the search. Can be one of: NeverDerefAliases, DerefInSearching, DerefFindingBaseObj, and DerefAlways (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#dereference_aliases AuthMethodLdap#dereference_aliases}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.description"></a>

- *Type:* str

The auth method description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#description AuthMethodLdap#description}

---

##### `discover_dn`<sup>Optional</sup> <a name="discover_dn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.discoverDn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use anon bind to discover the bind DN of a user (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#discover_dn AuthMethodLdap#discover_dn}

---

##### `enable_groups`<sup>Optional</sup> <a name="enable_groups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.enableGroups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Find the authenticated user's groups during authentication (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#enable_groups AuthMethodLdap#enable_groups}

---

##### `group_attr`<sup>Optional</sup> <a name="group_attr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.groupAttr"></a>

- *Type:* str

The attribute that enumerates a user's group membership from entries returned by a group search (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#group_attr AuthMethodLdap#group_attr}

---

##### `group_dn`<sup>Optional</sup> <a name="group_dn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.groupDn"></a>

- *Type:* str

The base DN under which to perform group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#group_dn AuthMethodLdap#group_dn}

---

##### `group_filter`<sup>Optional</sup> <a name="group_filter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.groupFilter"></a>

- *Type:* str

A go template used to construct a LDAP group search filter (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#group_filter AuthMethodLdap#group_filter}

---

##### `insecure_tls`<sup>Optional</sup> <a name="insecure_tls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.insecureTls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip the LDAP server SSL certificate validation (optional) - insecure and use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#insecure_tls AuthMethodLdap#insecure_tls}

---

##### `is_primary_for_scope`<sup>Optional</sup> <a name="is_primary_for_scope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.isPrimaryForScope"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, makes this auth method the primary auth method for the scope in which it resides.

The primary auth method for a scope means the the user will be automatically created when they login using an LDAP account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#is_primary_for_scope AuthMethodLdap#is_primary_for_scope}

---

##### `maximum_page_size`<sup>Optional</sup> <a name="maximum_page_size" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.maximumPageSize"></a>

- *Type:* typing.Union[int, float]

MaximumPageSize specifies a maximum search result size to use when retrieving the authenticated user's groups (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#maximum_page_size AuthMethodLdap#maximum_page_size}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.name"></a>

- *Type:* str

The auth method name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#name AuthMethodLdap#name}

---

##### `start_tls`<sup>Optional</sup> <a name="start_tls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.startTls"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Issue StartTLS command after connecting (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#start_tls AuthMethodLdap#start_tls}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.state"></a>

- *Type:* str

Can be one of 'inactive', 'active-private', or 'active-public'. Defaults to active-public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#state AuthMethodLdap#state}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.type"></a>

- *Type:* str

The type of auth method; hardcoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#type AuthMethodLdap#type}

---

##### `upn_domain`<sup>Optional</sup> <a name="upn_domain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.upnDomain"></a>

- *Type:* str

The userPrincipalDomain used to construct the UPN string for the authenticating user (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#upn_domain AuthMethodLdap#upn_domain}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.urls"></a>

- *Type:* typing.List[str]

The LDAP URLs that specify LDAP servers to connect to (required).  May be specified multiple times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#urls AuthMethodLdap#urls}

---

##### `user_attr`<sup>Optional</sup> <a name="user_attr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.userAttr"></a>

- *Type:* str

The attribute on user entry matching the username passed when authenticating (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#user_attr AuthMethodLdap#user_attr}

---

##### `user_dn`<sup>Optional</sup> <a name="user_dn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.userDn"></a>

- *Type:* str

The base DN under which to perform user search (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#user_dn AuthMethodLdap#user_dn}

---

##### `user_filter`<sup>Optional</sup> <a name="user_filter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.userFilter"></a>

- *Type:* str

A go template used to construct a LDAP user search filter (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#user_filter AuthMethodLdap#user_filter}

---

##### `use_token_groups`<sup>Optional</sup> <a name="use_token_groups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.Initializer.parameter.useTokenGroups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use the Active Directory tokenGroups constructed attribute of the user to find the group memberships (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#use_token_groups AuthMethodLdap#use_token_groups}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAccountAttributeMaps">reset_account_attribute_maps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAnonGroupSearch">reset_anon_group_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindDn">reset_bind_dn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPassword">reset_bind_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPasswordHmac">reset_bind_password_hmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetCertificates">reset_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKey">reset_client_certificate_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKeyHmac">reset_client_certificate_key_hmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDereferenceAliases">reset_dereference_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDiscoverDn">reset_discover_dn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetEnableGroups">reset_enable_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupAttr">reset_group_attr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupDn">reset_group_dn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupFilter">reset_group_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetInsecureTls">reset_insecure_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetIsPrimaryForScope">reset_is_primary_for_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetMaximumPageSize">reset_maximum_page_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetStartTls">reset_start_tls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUpnDomain">reset_upn_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUrls">reset_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserAttr">reset_user_attr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserDn">reset_user_dn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserFilter">reset_user_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUseTokenGroups">reset_use_token_groups</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_account_attribute_maps` <a name="reset_account_attribute_maps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAccountAttributeMaps"></a>

```python
def reset_account_attribute_maps() -> None
```

##### `reset_anon_group_search` <a name="reset_anon_group_search" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetAnonGroupSearch"></a>

```python
def reset_anon_group_search() -> None
```

##### `reset_bind_dn` <a name="reset_bind_dn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindDn"></a>

```python
def reset_bind_dn() -> None
```

##### `reset_bind_password` <a name="reset_bind_password" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPassword"></a>

```python
def reset_bind_password() -> None
```

##### `reset_bind_password_hmac` <a name="reset_bind_password_hmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetBindPasswordHmac"></a>

```python
def reset_bind_password_hmac() -> None
```

##### `reset_certificates` <a name="reset_certificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetCertificates"></a>

```python
def reset_certificates() -> None
```

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_client_certificate_key` <a name="reset_client_certificate_key" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKey"></a>

```python
def reset_client_certificate_key() -> None
```

##### `reset_client_certificate_key_hmac` <a name="reset_client_certificate_key_hmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetClientCertificateKeyHmac"></a>

```python
def reset_client_certificate_key_hmac() -> None
```

##### `reset_dereference_aliases` <a name="reset_dereference_aliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDereferenceAliases"></a>

```python
def reset_dereference_aliases() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_discover_dn` <a name="reset_discover_dn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetDiscoverDn"></a>

```python
def reset_discover_dn() -> None
```

##### `reset_enable_groups` <a name="reset_enable_groups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetEnableGroups"></a>

```python
def reset_enable_groups() -> None
```

##### `reset_group_attr` <a name="reset_group_attr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupAttr"></a>

```python
def reset_group_attr() -> None
```

##### `reset_group_dn` <a name="reset_group_dn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupDn"></a>

```python
def reset_group_dn() -> None
```

##### `reset_group_filter` <a name="reset_group_filter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetGroupFilter"></a>

```python
def reset_group_filter() -> None
```

##### `reset_insecure_tls` <a name="reset_insecure_tls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetInsecureTls"></a>

```python
def reset_insecure_tls() -> None
```

##### `reset_is_primary_for_scope` <a name="reset_is_primary_for_scope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetIsPrimaryForScope"></a>

```python
def reset_is_primary_for_scope() -> None
```

##### `reset_maximum_page_size` <a name="reset_maximum_page_size" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetMaximumPageSize"></a>

```python
def reset_maximum_page_size() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_start_tls` <a name="reset_start_tls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetStartTls"></a>

```python
def reset_start_tls() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_upn_domain` <a name="reset_upn_domain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUpnDomain"></a>

```python
def reset_upn_domain() -> None
```

##### `reset_urls` <a name="reset_urls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUrls"></a>

```python
def reset_urls() -> None
```

##### `reset_user_attr` <a name="reset_user_attr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserAttr"></a>

```python
def reset_user_attr() -> None
```

##### `reset_user_dn` <a name="reset_user_dn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserDn"></a>

```python
def reset_user_dn() -> None
```

##### `reset_user_filter` <a name="reset_user_filter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUserFilter"></a>

```python
def reset_user_filter() -> None
```

##### `reset_use_token_groups` <a name="reset_use_token_groups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.resetUseTokenGroups"></a>

```python
def reset_use_token_groups() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AuthMethodLdap resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isConstruct"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method_ldap

authMethodLdap.AuthMethodLdap.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method_ldap

authMethodLdap.AuthMethodLdap.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method_ldap

authMethodLdap.AuthMethodLdap.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method_ldap

authMethodLdap.AuthMethodLdap.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AuthMethodLdap resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AuthMethodLdap to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AuthMethodLdap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuthMethodLdap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMapsInput">account_attribute_maps_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearchInput">anon_group_search_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDnInput">bind_dn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmacInput">bind_password_hmac_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordInput">bind_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificatesInput">certificates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateInput">client_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmacInput">client_certificate_key_hmac_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyInput">client_certificate_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliasesInput">dereference_aliases_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDnInput">discover_dn_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroupsInput">enable_groups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttrInput">group_attr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDnInput">group_dn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilterInput">group_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTlsInput">insecure_tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScopeInput">is_primary_for_scope_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSizeInput">maximum_page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeIdInput">scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTlsInput">start_tls_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomainInput">upn_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urlsInput">urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttrInput">user_attr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDnInput">user_dn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilterInput">user_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroupsInput">use_token_groups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMaps">account_attribute_maps</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearch">anon_group_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDn">bind_dn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPassword">bind_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmac">bind_password_hmac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificates">certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKey">client_certificate_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmac">client_certificate_key_hmac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliases">dereference_aliases</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDn">discover_dn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroups">enable_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttr">group_attr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDn">group_dn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilter">group_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScope">is_primary_for_scope</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSize">maximum_page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeId">scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTls">start_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomain">upn_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urls">urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttr">user_attr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDn">user_dn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilter">user_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroups">use_token_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `account_attribute_maps_input`<sup>Optional</sup> <a name="account_attribute_maps_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMapsInput"></a>

```python
account_attribute_maps_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `anon_group_search_input`<sup>Optional</sup> <a name="anon_group_search_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearchInput"></a>

```python
anon_group_search_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bind_dn_input`<sup>Optional</sup> <a name="bind_dn_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDnInput"></a>

```python
bind_dn_input: str
```

- *Type:* str

---

##### `bind_password_hmac_input`<sup>Optional</sup> <a name="bind_password_hmac_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmacInput"></a>

```python
bind_password_hmac_input: str
```

- *Type:* str

---

##### `bind_password_input`<sup>Optional</sup> <a name="bind_password_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordInput"></a>

```python
bind_password_input: str
```

- *Type:* str

---

##### `certificates_input`<sup>Optional</sup> <a name="certificates_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificatesInput"></a>

```python
certificates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateInput"></a>

```python
client_certificate_input: str
```

- *Type:* str

---

##### `client_certificate_key_hmac_input`<sup>Optional</sup> <a name="client_certificate_key_hmac_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmacInput"></a>

```python
client_certificate_key_hmac_input: str
```

- *Type:* str

---

##### `client_certificate_key_input`<sup>Optional</sup> <a name="client_certificate_key_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyInput"></a>

```python
client_certificate_key_input: str
```

- *Type:* str

---

##### `dereference_aliases_input`<sup>Optional</sup> <a name="dereference_aliases_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliasesInput"></a>

```python
dereference_aliases_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `discover_dn_input`<sup>Optional</sup> <a name="discover_dn_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDnInput"></a>

```python
discover_dn_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_groups_input`<sup>Optional</sup> <a name="enable_groups_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroupsInput"></a>

```python
enable_groups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_attr_input`<sup>Optional</sup> <a name="group_attr_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttrInput"></a>

```python
group_attr_input: str
```

- *Type:* str

---

##### `group_dn_input`<sup>Optional</sup> <a name="group_dn_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDnInput"></a>

```python
group_dn_input: str
```

- *Type:* str

---

##### `group_filter_input`<sup>Optional</sup> <a name="group_filter_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilterInput"></a>

```python
group_filter_input: str
```

- *Type:* str

---

##### `insecure_tls_input`<sup>Optional</sup> <a name="insecure_tls_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTlsInput"></a>

```python
insecure_tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_primary_for_scope_input`<sup>Optional</sup> <a name="is_primary_for_scope_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScopeInput"></a>

```python
is_primary_for_scope_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maximum_page_size_input`<sup>Optional</sup> <a name="maximum_page_size_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSizeInput"></a>

```python
maximum_page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scope_id_input`<sup>Optional</sup> <a name="scope_id_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeIdInput"></a>

```python
scope_id_input: str
```

- *Type:* str

---

##### `start_tls_input`<sup>Optional</sup> <a name="start_tls_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTlsInput"></a>

```python
start_tls_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `upn_domain_input`<sup>Optional</sup> <a name="upn_domain_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomainInput"></a>

```python
upn_domain_input: str
```

- *Type:* str

---

##### `urls_input`<sup>Optional</sup> <a name="urls_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urlsInput"></a>

```python
urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_attr_input`<sup>Optional</sup> <a name="user_attr_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttrInput"></a>

```python
user_attr_input: str
```

- *Type:* str

---

##### `user_dn_input`<sup>Optional</sup> <a name="user_dn_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDnInput"></a>

```python
user_dn_input: str
```

- *Type:* str

---

##### `user_filter_input`<sup>Optional</sup> <a name="user_filter_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilterInput"></a>

```python
user_filter_input: str
```

- *Type:* str

---

##### `use_token_groups_input`<sup>Optional</sup> <a name="use_token_groups_input" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroupsInput"></a>

```python
use_token_groups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `account_attribute_maps`<sup>Required</sup> <a name="account_attribute_maps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.accountAttributeMaps"></a>

```python
account_attribute_maps: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `anon_group_search`<sup>Required</sup> <a name="anon_group_search" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.anonGroupSearch"></a>

```python
anon_group_search: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bind_dn`<sup>Required</sup> <a name="bind_dn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindDn"></a>

```python
bind_dn: str
```

- *Type:* str

---

##### `bind_password`<sup>Required</sup> <a name="bind_password" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPassword"></a>

```python
bind_password: str
```

- *Type:* str

---

##### `bind_password_hmac`<sup>Required</sup> <a name="bind_password_hmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.bindPasswordHmac"></a>

```python
bind_password_hmac: str
```

- *Type:* str

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.certificates"></a>

```python
certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_certificate_key`<sup>Required</sup> <a name="client_certificate_key" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKey"></a>

```python
client_certificate_key: str
```

- *Type:* str

---

##### `client_certificate_key_hmac`<sup>Required</sup> <a name="client_certificate_key_hmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.clientCertificateKeyHmac"></a>

```python
client_certificate_key_hmac: str
```

- *Type:* str

---

##### `dereference_aliases`<sup>Required</sup> <a name="dereference_aliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.dereferenceAliases"></a>

```python
dereference_aliases: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `discover_dn`<sup>Required</sup> <a name="discover_dn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.discoverDn"></a>

```python
discover_dn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_groups`<sup>Required</sup> <a name="enable_groups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.enableGroups"></a>

```python
enable_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_attr`<sup>Required</sup> <a name="group_attr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupAttr"></a>

```python
group_attr: str
```

- *Type:* str

---

##### `group_dn`<sup>Required</sup> <a name="group_dn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupDn"></a>

```python
group_dn: str
```

- *Type:* str

---

##### `group_filter`<sup>Required</sup> <a name="group_filter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.groupFilter"></a>

```python
group_filter: str
```

- *Type:* str

---

##### `insecure_tls`<sup>Required</sup> <a name="insecure_tls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.insecureTls"></a>

```python
insecure_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_primary_for_scope`<sup>Required</sup> <a name="is_primary_for_scope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.isPrimaryForScope"></a>

```python
is_primary_for_scope: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maximum_page_size`<sup>Required</sup> <a name="maximum_page_size" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.maximumPageSize"></a>

```python
maximum_page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

---

##### `start_tls`<sup>Required</sup> <a name="start_tls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.startTls"></a>

```python
start_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `upn_domain`<sup>Required</sup> <a name="upn_domain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.upnDomain"></a>

```python
upn_domain: str
```

- *Type:* str

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.urls"></a>

```python
urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_attr`<sup>Required</sup> <a name="user_attr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userAttr"></a>

```python
user_attr: str
```

- *Type:* str

---

##### `user_dn`<sup>Required</sup> <a name="user_dn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userDn"></a>

```python
user_dn: str
```

- *Type:* str

---

##### `user_filter`<sup>Required</sup> <a name="user_filter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.userFilter"></a>

```python
user_filter: str
```

- *Type:* str

---

##### `use_token_groups`<sup>Required</sup> <a name="use_token_groups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.useTokenGroups"></a>

```python
use_token_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdap.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuthMethodLdapConfig <a name="AuthMethodLdapConfig" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_boundary import auth_method_ldap

authMethodLdap.AuthMethodLdapConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scope_id: str,
  account_attribute_maps: typing.List[str] = None,
  anon_group_search: typing.Union[bool, IResolvable] = None,
  bind_dn: str = None,
  bind_password: str = None,
  bind_password_hmac: str = None,
  certificates: typing.List[str] = None,
  client_certificate: str = None,
  client_certificate_key: str = None,
  client_certificate_key_hmac: str = None,
  dereference_aliases: str = None,
  description: str = None,
  discover_dn: typing.Union[bool, IResolvable] = None,
  enable_groups: typing.Union[bool, IResolvable] = None,
  group_attr: str = None,
  group_dn: str = None,
  group_filter: str = None,
  insecure_tls: typing.Union[bool, IResolvable] = None,
  is_primary_for_scope: typing.Union[bool, IResolvable] = None,
  maximum_page_size: typing.Union[int, float] = None,
  name: str = None,
  start_tls: typing.Union[bool, IResolvable] = None,
  state: str = None,
  type: str = None,
  upn_domain: str = None,
  urls: typing.List[str] = None,
  user_attr: str = None,
  user_dn: str = None,
  user_filter: str = None,
  use_token_groups: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.scopeId">scope_id</a></code> | <code>str</code> | The scope ID. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.accountAttributeMaps">account_attribute_maps</a></code> | <code>typing.List[str]</code> | Account attribute maps fullname and email. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.anonGroupSearch">anon_group_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use anon bind when performing LDAP group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindDn">bind_dn</a></code> | <code>str</code> | The distinguished name of entry to bind when performing user and group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPassword">bind_password</a></code> | <code>str</code> | The password to use along with bind-dn performing user and group searches (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPasswordHmac">bind_password_hmac</a></code> | <code>str</code> | The HMAC of the bind password returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.certificates">certificates</a></code> | <code>typing.List[str]</code> | PEM-encoded X.509 CA certificate in ASN.1 DER form that can be used as a trust anchor when connecting to an LDAP server(optional).  This may be specified multiple times. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificate">client_certificate</a></code> | <code>str</code> | PEM-encoded X.509 client certificate in ASN.1 DER form that can be used to authenticate against an LDAP server(optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKey">client_certificate_key</a></code> | <code>str</code> | PEM-encoded X.509 client certificate key in PKCS #8, ASN.1 DER form used with the client certificate (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKeyHmac">client_certificate_key_hmac</a></code> | <code>str</code> | The HMAC of the client certificate key returned by the Boundary controller, which is used for comparison after initial setting of the value. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dereferenceAliases">dereference_aliases</a></code> | <code>str</code> | Control how aliases are dereferenced when performing the search. Can be one of: NeverDerefAliases, DerefInSearching, DerefFindingBaseObj, and DerefAlways (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.description">description</a></code> | <code>str</code> | The auth method description. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.discoverDn">discover_dn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use anon bind to discover the bind DN of a user (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.enableGroups">enable_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Find the authenticated user's groups during authentication (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupAttr">group_attr</a></code> | <code>str</code> | The attribute that enumerates a user's group membership from entries returned by a group search (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupDn">group_dn</a></code> | <code>str</code> | The base DN under which to perform group search. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupFilter">group_filter</a></code> | <code>str</code> | A go template used to construct a LDAP group search filter (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.insecureTls">insecure_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip the LDAP server SSL certificate validation (optional) - insecure and use with caution. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.isPrimaryForScope">is_primary_for_scope</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, makes this auth method the primary auth method for the scope in which it resides. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.maximumPageSize">maximum_page_size</a></code> | <code>typing.Union[int, float]</code> | MaximumPageSize specifies a maximum search result size to use when retrieving the authenticated user's groups (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.name">name</a></code> | <code>str</code> | The auth method name. Defaults to the resource name. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.startTls">start_tls</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Issue StartTLS command after connecting (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.state">state</a></code> | <code>str</code> | Can be one of 'inactive', 'active-private', or 'active-public'. Defaults to active-public. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.type">type</a></code> | <code>str</code> | The type of auth method; hardcoded. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.upnDomain">upn_domain</a></code> | <code>str</code> | The userPrincipalDomain used to construct the UPN string for the authenticating user (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.urls">urls</a></code> | <code>typing.List[str]</code> | The LDAP URLs that specify LDAP servers to connect to (required).  May be specified multiple times. |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userAttr">user_attr</a></code> | <code>str</code> | The attribute on user entry matching the username passed when authenticating (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userDn">user_dn</a></code> | <code>str</code> | The base DN under which to perform user search (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userFilter">user_filter</a></code> | <code>str</code> | A go template used to construct a LDAP user search filter (optional). |
| <code><a href="#@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.useTokenGroups">use_token_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use the Active Directory tokenGroups constructed attribute of the user to find the group memberships (optional). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

The scope ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#scope_id AuthMethodLdap#scope_id}

---

##### `account_attribute_maps`<sup>Optional</sup> <a name="account_attribute_maps" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.accountAttributeMaps"></a>

```python
account_attribute_maps: typing.List[str]
```

- *Type:* typing.List[str]

Account attribute maps fullname and email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#account_attribute_maps AuthMethodLdap#account_attribute_maps}

---

##### `anon_group_search`<sup>Optional</sup> <a name="anon_group_search" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.anonGroupSearch"></a>

```python
anon_group_search: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use anon bind when performing LDAP group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#anon_group_search AuthMethodLdap#anon_group_search}

---

##### `bind_dn`<sup>Optional</sup> <a name="bind_dn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindDn"></a>

```python
bind_dn: str
```

- *Type:* str

The distinguished name of entry to bind when performing user and group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#bind_dn AuthMethodLdap#bind_dn}

---

##### `bind_password`<sup>Optional</sup> <a name="bind_password" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPassword"></a>

```python
bind_password: str
```

- *Type:* str

The password to use along with bind-dn performing user and group searches (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#bind_password AuthMethodLdap#bind_password}

---

##### `bind_password_hmac`<sup>Optional</sup> <a name="bind_password_hmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.bindPasswordHmac"></a>

```python
bind_password_hmac: str
```

- *Type:* str

The HMAC of the bind password returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#bind_password_hmac AuthMethodLdap#bind_password_hmac}

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.certificates"></a>

```python
certificates: typing.List[str]
```

- *Type:* typing.List[str]

PEM-encoded X.509 CA certificate in ASN.1 DER form that can be used as a trust anchor when connecting to an LDAP server(optional).  This may be specified multiple times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#certificates AuthMethodLdap#certificates}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

PEM-encoded X.509 client certificate in ASN.1 DER form that can be used to authenticate against an LDAP server(optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#client_certificate AuthMethodLdap#client_certificate}

---

##### `client_certificate_key`<sup>Optional</sup> <a name="client_certificate_key" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKey"></a>

```python
client_certificate_key: str
```

- *Type:* str

PEM-encoded X.509 client certificate key in PKCS #8, ASN.1 DER form used with the client certificate (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#client_certificate_key AuthMethodLdap#client_certificate_key}

---

##### `client_certificate_key_hmac`<sup>Optional</sup> <a name="client_certificate_key_hmac" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.clientCertificateKeyHmac"></a>

```python
client_certificate_key_hmac: str
```

- *Type:* str

The HMAC of the client certificate key returned by the Boundary controller, which is used for comparison after initial setting of the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#client_certificate_key_hmac AuthMethodLdap#client_certificate_key_hmac}

---

##### `dereference_aliases`<sup>Optional</sup> <a name="dereference_aliases" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.dereferenceAliases"></a>

```python
dereference_aliases: str
```

- *Type:* str

Control how aliases are dereferenced when performing the search. Can be one of: NeverDerefAliases, DerefInSearching, DerefFindingBaseObj, and DerefAlways (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#dereference_aliases AuthMethodLdap#dereference_aliases}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The auth method description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#description AuthMethodLdap#description}

---

##### `discover_dn`<sup>Optional</sup> <a name="discover_dn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.discoverDn"></a>

```python
discover_dn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use anon bind to discover the bind DN of a user (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#discover_dn AuthMethodLdap#discover_dn}

---

##### `enable_groups`<sup>Optional</sup> <a name="enable_groups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.enableGroups"></a>

```python
enable_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Find the authenticated user's groups during authentication (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#enable_groups AuthMethodLdap#enable_groups}

---

##### `group_attr`<sup>Optional</sup> <a name="group_attr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupAttr"></a>

```python
group_attr: str
```

- *Type:* str

The attribute that enumerates a user's group membership from entries returned by a group search (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#group_attr AuthMethodLdap#group_attr}

---

##### `group_dn`<sup>Optional</sup> <a name="group_dn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupDn"></a>

```python
group_dn: str
```

- *Type:* str

The base DN under which to perform group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#group_dn AuthMethodLdap#group_dn}

---

##### `group_filter`<sup>Optional</sup> <a name="group_filter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.groupFilter"></a>

```python
group_filter: str
```

- *Type:* str

A go template used to construct a LDAP group search filter (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#group_filter AuthMethodLdap#group_filter}

---

##### `insecure_tls`<sup>Optional</sup> <a name="insecure_tls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.insecureTls"></a>

```python
insecure_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip the LDAP server SSL certificate validation (optional) - insecure and use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#insecure_tls AuthMethodLdap#insecure_tls}

---

##### `is_primary_for_scope`<sup>Optional</sup> <a name="is_primary_for_scope" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.isPrimaryForScope"></a>

```python
is_primary_for_scope: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, makes this auth method the primary auth method for the scope in which it resides.

The primary auth method for a scope means the the user will be automatically created when they login using an LDAP account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#is_primary_for_scope AuthMethodLdap#is_primary_for_scope}

---

##### `maximum_page_size`<sup>Optional</sup> <a name="maximum_page_size" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.maximumPageSize"></a>

```python
maximum_page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

MaximumPageSize specifies a maximum search result size to use when retrieving the authenticated user's groups (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#maximum_page_size AuthMethodLdap#maximum_page_size}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The auth method name. Defaults to the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#name AuthMethodLdap#name}

---

##### `start_tls`<sup>Optional</sup> <a name="start_tls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.startTls"></a>

```python
start_tls: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Issue StartTLS command after connecting (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#start_tls AuthMethodLdap#start_tls}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Can be one of 'inactive', 'active-private', or 'active-public'. Defaults to active-public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#state AuthMethodLdap#state}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of auth method; hardcoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#type AuthMethodLdap#type}

---

##### `upn_domain`<sup>Optional</sup> <a name="upn_domain" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.upnDomain"></a>

```python
upn_domain: str
```

- *Type:* str

The userPrincipalDomain used to construct the UPN string for the authenticating user (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#upn_domain AuthMethodLdap#upn_domain}

---

##### `urls`<sup>Optional</sup> <a name="urls" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.urls"></a>

```python
urls: typing.List[str]
```

- *Type:* typing.List[str]

The LDAP URLs that specify LDAP servers to connect to (required).  May be specified multiple times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#urls AuthMethodLdap#urls}

---

##### `user_attr`<sup>Optional</sup> <a name="user_attr" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userAttr"></a>

```python
user_attr: str
```

- *Type:* str

The attribute on user entry matching the username passed when authenticating (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#user_attr AuthMethodLdap#user_attr}

---

##### `user_dn`<sup>Optional</sup> <a name="user_dn" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userDn"></a>

```python
user_dn: str
```

- *Type:* str

The base DN under which to perform user search (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#user_dn AuthMethodLdap#user_dn}

---

##### `user_filter`<sup>Optional</sup> <a name="user_filter" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.userFilter"></a>

```python
user_filter: str
```

- *Type:* str

A go template used to construct a LDAP user search filter (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#user_filter AuthMethodLdap#user_filter}

---

##### `use_token_groups`<sup>Optional</sup> <a name="use_token_groups" id="@cdktf/provider-boundary.authMethodLdap.AuthMethodLdapConfig.property.useTokenGroups"></a>

```python
use_token_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use the Active Directory tokenGroups constructed attribute of the user to find the group memberships (optional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/auth_method_ldap#use_token_groups AuthMethodLdap#use_token_groups}

---



